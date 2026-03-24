const SiteFooter = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="px-8 md:px-12 py-12 text-center">
        <h2 className="font-display text-2xl md:text-3xl tracking-[0.15em] font-light mb-1">
          CENTRAL APPAREL
        </h2>
        <div className="w-full max-w-xs mx-auto h-px bg-primary-foreground/30 mb-8" />

        <div className="flex flex-col gap-4 text-[10px] tracking-[0.15em] uppercase text-primary-foreground/70 font-body">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            <span>
              <strong className="text-primary-foreground/90">Phone / WhatsApp:</strong> (+84) 935-105-799 Hoàng Trần (Ray)
            </span>
            <span>
              <strong className="text-primary-foreground/90">Email:</strong> info@centralapparel.com
            </span>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            <span>
              <strong className="text-primary-foreground/90">Vietnam Representative Office – Ho Chi Minh City</strong><br />
              48 Street No.1, HimLam Residence, TanHung Ward, Viet Nam
            </span>
            <span>
              <strong className="text-primary-foreground/90">US Market Representative - United States</strong><br />
              2009 Lorelle Ct, Allen, Texas 75013, United States
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
