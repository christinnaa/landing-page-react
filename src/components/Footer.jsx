function Footer() {
  return (
    <div className="h-[240px] bg-tertiaryColor">
      <div className="text-white bg-secondaryColor h-[190px] flex flex-col items-center justify-end">
        <h2 className="text-2xl font-semibold">Administration List</h2>
        <p className="mb-2 mt-8">Address: 25 Wilton Rd, Victoria, London SW1V 1LW</p>
      </div>
      <div className="h-[50px] flex justify-center items-center text-white font-light text-xs">
        <p>© Copyright 2022. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
