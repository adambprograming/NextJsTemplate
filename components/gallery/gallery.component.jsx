"use client";
// Styles
import styles from "./gallery.module.scss";
// Public & Assets

// React/Next Functions
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
// Context & Actions

// Componenets

/*
INSTRUCTIONS 
  images                              (*)array of image sources – can be array of strings or objects { src, alt?, caption? }
  layout                              (grid | masonry) layout style for displaying images (default: grid)
  masonryColumnsDesktop               (number) column count for masonry layout for desktop (default: 3)
  masonryColumnsDesktop               (number) column count for masonry layout for tablet (default: 3)
  masonryColumnsMobile                (number) column count for masonry layout for mobile (default: 3)
  modalSize                           (number) size (px) of modal image (default: 1440)
  loop                                (true | false) defines if navigation in modal loops from end to start (default: true)
  onOpen                              (function(index)) function that fires when modal is opened with given image index
  onClose                             (function()) function that fires when modal is closed
*/

export default function Gallery({
  images = [],
  layout = "grid",
  masonryColumnsDesktop = 5,
  masonryColumnsTablet = 4,
  masonryColumnsMobile = 3,
  modalSize = 1440,
  loop = true,
  onOpen = () => {},
  onClose = () => {},
}) {
  const {
    currentIndex,
    isModalOpen,
    openModal,
    closeModal,
    showNext,
    showPrev,
    modalRef,
    touchHandlers,
  } = useGalleryNavigation({ images, loop, onOpen, onClose });

  return (
    <div
      className={`${styles.gallery} ${
        layout === "masonry" ? styles.masonry : styles.grid
      }`}
      style={{
        "--localMasonryColumnsDesktop": masonryColumnsDesktop,
        "--localMasonryColumnsMobile": masonryColumnsMobile,
        "--localMasonryColumnsTablet": masonryColumnsTablet,
      }}
    >
      {images.map((img, index) => (
        <GalleryItem
          key={index}
          item={img}
          index={index}
          openModal={openModal}
        />
      ))}

      {isModalOpen && currentIndex !== null && (
        <GalleryModal
          item={images[currentIndex]}
          onClose={closeModal}
          showNext={showNext}
          showPrev={showPrev}
          modalSize={modalSize}
          modalRef={modalRef}
          touchHandlers={touchHandlers}
        />
      )}
    </div>
  );
}

function GalleryItem({ item, index, openModal }) {
  const [loaded, setLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const isVideo =
    typeof item === "string"
      ? item.endsWith(".mp4")
      : item.type === "video" || item.src.endsWith(".mp4");

  const src = typeof item === "string" ? item : item.src;
  const alt =
    typeof item === "string"
      ? "Gallery item"
      : item.alt || item.caption || "Gallery item";
  const caption = typeof item === "string" ? "" : item.caption || "";
  const poster =
    typeof item === "string" ? "/fallback.jpg" : item.poster || "/fallback.jpg";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <figure
      className={styles.galleryItem}
      onClick={() => openModal(index)}
      ref={containerRef}
    >
      {!loaded && <div className={styles.skeletonWrapper} />}

      {isVisible &&
        (isVideo ? (
          <video
            className={styles.videoThumb}
            muted
            playsInline
            preload="metadata"
            loading="lazy"
            poster={poster}
            onLoadStart={() => setLoaded(true)}
          >
            <source src={`${src}#t=0.001`} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            className={styles.imageThumb}
            width={800}
            height={1000}
            onLoad={() => setLoaded(true)}
          />
        ))}

      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}

function GalleryModal({
  item,
  onClose,
  showNext,
  showPrev,
  modalSize,
  modalRef,
  touchHandlers,
}) {
  const isVideo =
    typeof item === "string"
      ? item.endsWith(".mp4")
      : item.src.endsWith(".mp4");
  const src = typeof item === "string" ? item : item.src;
  const alt =
    typeof item === "string"
      ? "Gallery item"
      : item.alt || item.caption || "Gallery item";
  const caption = typeof item === "string" ? "" : item.caption || "";

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={styles.modalContent}
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={touchHandlers.onTouchStart}
        onTouchEnd={touchHandlers.onTouchEnd}
      >
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Zavřít"
        >
          ×
        </button>
        {isVideo ? (
          <video
            controls
            playsInline
            autoPlay
            className={styles.modalVideo}
            width={modalSize}
            height={modalSize}
          >
            <source src={`${src}#t=0.001`} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={src}
            alt={alt}
            loading="lazy"
            className={styles.modalImage}
            width={modalSize}
            height={modalSize}
          />
        )}
        {caption && <div className={styles.modalCaption}>{caption}</div>}
      </div>

      <button
        className={styles.prev}
        onClick={(e) => {
          e.stopPropagation();
          showPrev();
        }}
        aria-label="Předchozí"
      >
        ❮
      </button>
      <button
        className={styles.next}
        onClick={(e) => {
          e.stopPropagation();
          showNext();
        }}
        aria-label="Další"
      >
        ❯
      </button>
    </div>
  );
}

function useGalleryNavigation({ images, loop, onOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const touchStartX = useRef(null);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    onOpen(index);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentIndex(null);
    onClose();
  };

  const showPrev = () => {
    if (!images.length || currentIndex === null) return;
    setCurrentIndex((idx) =>
      idx === 0 && !loop ? idx : (idx - 1 + images.length) % images.length
    );
  };

  const showNext = () => {
    if (!images.length || currentIndex === null) return;
    setCurrentIndex((idx) =>
      idx === images.length - 1 && !loop ? idx : (idx + 1) % images.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "Tab") {
        const els = modalRef.current?.querySelectorAll(
          "button, [tabindex]:not([tabindex='-1'])"
        );
        if (!els?.length) return;
        const [first, last] = [els[0], els[els.length - 1]];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen, currentIndex, loop]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) delta < 0 ? showNext() : showPrev();
    touchStartX.current = null;
  };

  return {
    currentIndex,
    isModalOpen,
    openModal,
    closeModal,
    showNext,
    showPrev,
    modalRef,
    touchHandlers: { onTouchStart, onTouchEnd },
  };
}
