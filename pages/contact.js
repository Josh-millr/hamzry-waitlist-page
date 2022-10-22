import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  ContactForm,
  ContactPopup,
} from "../components/index";

const Contact = () => {
  return (
    <div>
      <ContactPopup />
      <div className="grid grid-cols-1 grid-rows-1 px-[24px] pb-[100px] md:px-[72px] lg:grid-cols-2 lg:grid-rows-1  lg:py-[32px]">
        {/* Column 1 */}
        <div className="flex flex-col gap-y-[32px] py-[24px]">
          {/*  */}
          <div className="grid w-full place-content-center lg:place-content-start">
            <div className="block lg:hidden">
              <Image
                src="/3d-hand.svg"
                height={80}
                width={96}
                alt="Hamzry Logo"
              />
            </div>
            <div className="hidden lg:block">
              <Image
                src="/3d-hand.svg"
                height={146}
                width={177}
                alt="Hamzry Logo"
              />
            </div>
          </div>
          {/*  */}
          <div className=" hidden gap-y-[8px] lg:grid">
            <h2 className="text-[20px] font-bold">
              Follow us on social media.
            </h2>
            <p className="text-[14px]">
              You can send us a message too, we are so happy to respond.
            </p>
          </div>
          {/*  */}
          <div className="hidden w-[fit-content] lg:block">
            <ul className="grid grid-cols-2 grid-rows-2 gap-[16px] font-bold underline decoration-[#009879]">
              {/* Instagram Link */}
              <li>
                <a
                  href="https://www.instagram.com/hamzrydigital/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex gap-x-[8px]">
                    <Instagram />
                    <p className="text-[14px]">Instagram@Hamzry</p>
                  </div>
                </a>
              </li>
              {/* Linkedin link */}
              <li>
                <a
                  href="https://ng.linkedin.com/company/hamzry?trk=public_post_feed-actor-name"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex gap-x-[8px]">
                    <Linkedin />
                    <p className="text-[14px]">Linkedin@Hamzry</p>
                  </div>
                </a>
              </li>
              {/* Twitter Link */}
              <li>
                <a
                  href="https://twitter.com/HamzryDigital"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex gap-x-[8px]">
                    <Twitter />
                    <p className="text-[14px]">Twitter@Hamzry</p>
                  </div>
                </a>
              </li>
              {/* Facebook Link */}
              <li>
                <a
                  href="https://web.facebook.com/hamzry?hc_ref=ARQxqpt0adoinuu6kdJm-tcB2zrEKGV-cgbS_wACj0eRNHx8Xa0hXYb-56c6Z6IpVI0&fref=nf&__xts__[0]=68.ARAyk2sNxUrr2DvJizGpr9zy8rUPB4Mu2yRd5ZqJZUY9Ro58fH---cUZZ0j-7EhsTiWhmq-egCL_isryqaoVgJoB_H6jBEjcxXLUoGM2Yp60p452dVX0657TmsoSbdVFJtUjPB3nxY0yJEphnP8ubD-qU6L2uPPOi3xqxlMBsDRBgOblajnsLbfByeCvmLdbpHRU2y9dlnzmsV6048isHSp2D2ZmiIOwTGkNHnNcXTfnsEfo6MkivQhaGCAMTX7-Z0kZdOqF9okzdlBOcKDOhkCzMMaVpySAdQbhczAOWA3lZOzrU5Y&_rdc=1&_rdr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex gap-x-[8px]">
                    <Facebook />
                    <p className="text-[14px]">Facebook@Hamzry</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Column 2 */}
        <div className="grid grid-cols-1 grid-rows-1 gap-y-[32px]">
          <div className="">
            <h1 className="text-center text-[40px] font-bold leading-tight tracking-tight lg:text-start lg:text-[40px]">
              Your
              <span className="text-[#009879]"> thoughts </span>
              <br className="block sm:hidden" />
              matter to us.
            </h1>
            <p className="text-center text-[14px] sm:text-[16px] lg:m-[0] lg:text-start">
              Let us know what you like to see on our product.
            </p>
          </div>
          <div className="">
            {/* // Add the contact form here */}
            <ContactForm />
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-1 place-items-center gap-y-[24px] py-[24px] text-center lg:hidden">
          <span className="h-[1px] w-[50%] bg-[#E8E8E8]" />
          <div className="grid gap-y-[8px]">
            <h2 className="text-[20px] font-bold">
              Follow us on social media.
            </h2>
            <p className="text-[14px]">
              You can send us a message too, we are so happy to respond.
            </p>
          </div>
          <div className="">
            <ul className="grid grid-cols-2 grid-rows-2 gap-[16px] font-bold underline decoration-[#009879]">
              <li>
                <a
                  href="https://www.instagram.com/hamzrydigital/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex gap-x-[8px]">
                    <Instagram />
                    <p className="text-[14px]">Instagram@Hamzry</p>
                  </div>
                </a>
              </li>
              {/* Linkedin link */}
              <li>
                <a
                  href="https://ng.linkedin.com/company/hamzry?trk=public_post_feed-actor-name"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex gap-x-[8px]">
                    <Linkedin />
                    <p className="text-[14px]">Linkedin@Hamzry</p>
                  </div>
                </a>
              </li>
              {/* Twitter Link */}
              <li>
                <a
                  href="https://twitter.com/HamzryDigital"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex gap-x-[8px]">
                    <Twitter />
                    <p className="text-[14px]">Twitter@Hamzry</p>
                  </div>
                </a>
              </li>
              {/* Facebook Link */}
              <li>
                <a
                  href="https://web.facebook.com/hamzry?hc_ref=ARQxqpt0adoinuu6kdJm-tcB2zrEKGV-cgbS_wACj0eRNHx8Xa0hXYb-56c6Z6IpVI0&fref=nf&__xts__[0]=68.ARAyk2sNxUrr2DvJizGpr9zy8rUPB4Mu2yRd5ZqJZUY9Ro58fH---cUZZ0j-7EhsTiWhmq-egCL_isryqaoVgJoB_H6jBEjcxXLUoGM2Yp60p452dVX0657TmsoSbdVFJtUjPB3nxY0yJEphnP8ubD-qU6L2uPPOi3xqxlMBsDRBgOblajnsLbfByeCvmLdbpHRU2y9dlnzmsV6048isHSp2D2ZmiIOwTGkNHnNcXTfnsEfo6MkivQhaGCAMTX7-Z0kZdOqF9okzdlBOcKDOhkCzMMaVpySAdQbhczAOWA3lZOzrU5Y&_rdc=1&_rdr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex gap-x-[8px]">
                    <Facebook />
                    <p className="text-[14px]">Facebook@Hamzry</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
