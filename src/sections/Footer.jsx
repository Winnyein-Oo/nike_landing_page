import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <div className="padding-x pt-24 max-sm:pt-12 pb-12 text-white-400 font-montserrat container ">
      <div className="  lg:flex lg:gap-24 mb-24">
        <div className="flex flex-col gap-6 mb-14">
          <img src={footerLogo} width={164} />
          <p className="max-w-lg">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex gap-6">
            {socialMedia.map((sm) => (
              <div
                key={sm.alt}
                className="bg-white w-fit p-3 rounded-full cursor-pointer"
              >
                <img src={sm.src} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap w-full justify-between gap-y-8 ">
          {footerLinks.map((link) => (
            <div key={link.title} className="max-w-xs ">
              <h4 className="text-2xl font-medium mb-8">{link.title}</h4>
              <div className="flex flex-col gap-4 ">
                {link.links.map((link) => (
                  <a
                    href={link.link}
                    key={link.name}
                    className="hover:text-slate-gray"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center md:flex md:justify-between">
        <p className="flex gap-2 justify-center">
          <img src={copyrightSign} /> Copyright. All rights reserved.
        </p>
        <p>Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
