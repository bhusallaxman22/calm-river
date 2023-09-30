import Logo from "./logo";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        {/* Address */}
        <div className="text-sm text-gray-600 mr-4">
          <span className="text-gray-700 font-bold">Calm River Inc</span>
          <br />
          511 East John Carpenter Freeway
          <br />
          Suite 500,
          <br />
          Irving, TX 75062
        </div>
        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">
            &copy; Calm River Consulting. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
