import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#4F463D]  text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-4">
        {/* Logo / Sobre */}
        <div>
          <h2 className="text-2xl font-bold mb-3">santosha</h2>
          <p className="text-white-600 text-white text-sm">
            Transform your body and mind with our yoga classes.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-white-600 text-sm">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Classes</a>
            </li>
            <li>
              <a href="#">Trainers</a>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-white-600 text-sm">
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="flex flex-col">
          <h3 className="font-semibold mb-3">Follow us</h3>
          <div className="flex gap-4 text-white-600 text-sm">
            <span>Instagram</span>
            <span>Facebook</span>
            <span>Twitter</span>
          </div>
          <div className="flex justify-around w-[82%] pt-4  ">
            <Image src="/Inst_Icon.png" alt="" width={25} height={30} />
            <Image src="/TG_Icon.png" alt="" width={25} height={30} />
            <Image src="/twitter.jpg" alt="" width={25} height={30} />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        className="text-center"
        style={{
          padding: "44px 10px",
          color: "white",
          borderTop: "2px solid white",
          fontSize: "20px",
        }}
      >
        © 2026 santosha. All rights reserved.
      </div>
    </footer>
  );
}
