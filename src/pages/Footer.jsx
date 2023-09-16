function Footer() {
  return (
    <footer className="pt-[147px]">
      <div className="flex items-center justify-center gap-12 pb-9">
        <a href="">
          <img src="public/facebook.svg" alt="" />
        </a>
        <a href="">
          <img src="public/instagram.svg" alt="" />
        </a>
        <a href="">
          <img src="public/twitter.svg" alt="" />
        </a>
        <a href="">
          <img src="public/youtube.svg" alt="" />
        </a>
      </div>
      <div className="text-gray-900 text-base sm:text-[18px] flex justify-center items-center font-bold gap-12">
        <a href="">Conditions of Use</a>
        <a href="">Privacy & Policy</a>
        <a href="">Press Room</a>
      </div>
      <p className="text-grey-500 text-base sm:text-[18px] font-bold text-center pt-9">
        2023 MovieBox by Ajilogba Ayomide
      </p>
    </footer>
  );
}

export default Footer;
