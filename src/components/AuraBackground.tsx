/**
 * AuraBackground — Fixed layered glow background
 * Replicates the reference site's complex glow layer stack using pure CSS.
 * Sits at z-[-10] behind all content.
 */
export function AuraBackground() {
  return (
    <>
      {/* Background Video — z-index 0 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4"
      />

      {/* Bottom Blur Overlay — z-index 1 */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] backdrop-blur-xl"
        style={{
          WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 45%)',
          maskImage: 'linear-gradient(to top, black 0%, transparent 45%)',
        }}
      />
    </>
  );
}
