"use client";
// Styles
import styles from "./gallery.module.scss";
// Public & Assets

// React/Next Functions
import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
// Context & Actions

// Componenets

/*
INSTRUCTIONS 
  images                (*)array of image sources – can be array of strings or objects { src, alt?, caption? }
  layout                (grid | masonry) layout style for displaying images (default: grid)
  masonryColumnWidth    (number) column width in px for masonry layout (default: 450)
  modalSize             (number) size (px) of modal image (default: 1440)
  loop                  (true | false) defines if navigation in modal loops from end to start (default: true)
  onOpen                (function(index)) function that fires when modal is opened with given image index
  onClose               (function()) function that fires when modal is closed
*/

export default function Gallery({
  images = [],
  layout = "grid",
  masonryColumnWidth = 450,
  modalSize = 1440,
  onOpen = () => {},
  onClose = () => {},
  loop = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const touchStartX = useRef(null);
  const modalRef = useRef(null);

  const getImageData = (img) => {
    if (typeof img === "string") {
      return { src: img, alt: "Gallery image", caption: "" };
    }
    return {
      src: img.src,
      alt: img.alt || img.caption || "Gallery image",
      caption: img.caption || "",
    };
  };

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
    if (images.length === 0 || currentIndex === null) return;
    setCurrentIndex((idx) => {
      if (idx === 0 && !loop) return idx;
      return (idx - 1 + images.length) % images.length;
    });
  };

  const showNext = () => {
    if (images.length === 0 || currentIndex === null) return;
    setCurrentIndex((idx) => {
      if (idx === images.length - 1 && !loop) return idx;
      return (idx + 1) % images.length;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      if (e.key === "Escape") closeModal();
      else if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
      else if (e.key === "Tab") {
        const focusableEls = modalRef.current?.querySelectorAll(
          "button, [tabindex]:not([tabindex='-1'])"
        );
        const firstEl = focusableEls?.[0];
        const lastEl = focusableEls?.[focusableEls.length - 1];
        if (!firstEl || !lastEl) return;

        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // prevent scroll
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen, currentIndex, loop]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diffX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diffX) > 50) {
      diffX < 0 ? showNext() : showPrev();
    }
    touchStartX.current = null;
  };

  const renderedThumbnails = useMemo(() => {
    return images.map((img, index) => {
      const { src, alt, caption } = getImageData(img);
      return (
        <figure
          key={index}
          className={styles.galleryItem}
          onClick={() => openModal(index)}
        >
          <Image
            src={src}
            alt={alt}
            loading="lazy"
            className={styles.imageThumb}
            width={1440}
            height={1440}
          />
          {caption && (
            <figcaption className={styles.caption}>{caption}</figcaption>
          )}
        </figure>
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  return (
    <div
      className={`${styles.gallery} ${
        layout === "masonry" ? styles.masonry : styles.grid
      }`}
      style={
        layout === "masonry" ? { columnWidth: masonryColumnWidth } : undefined
      }
    >
      {renderedThumbnails}

      {isModalOpen && currentIndex !== null && (
        <div
          className={styles.modalOverlay}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={styles.modalContent}
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button
              className={styles.closeBtn}
              onClick={closeModal}
              aria-label="Zavřít"
            >
              ×
            </button>
            <Image
              src={getImageData(images[currentIndex]).src}
              alt={getImageData(images[currentIndex]).alt}
              loading="lazy"
              className={styles.modalImage}
              width={modalSize}
              height={modalSize}
            />
            {getImageData(images[currentIndex]).caption && (
              <div className={styles.modalCaption}>
                {getImageData(images[currentIndex]).caption}
              </div>
            )}
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
      )}
    </div>
  );
}
