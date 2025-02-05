"use client";

export default function GlobalError({ error, reset }) {
  console.log(error);
  return (
    <html>
      <body>
        <h2>Něco se nepovedlo</h2>
        <button onClick={() => reset()}>Zkuste to znovu</button>
      </body>
    </html>
  );
}
