export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-center py-6 mt-10">
      <p className="text-sm text-[#d5d4d4] ">
        &copy; {new Date().getFullYear()} OpenMic. All rights reserved.
      </p>
    </footer>
  );
}
