export default function Footer() {
  return (
    <footer className="bg-black pt-24 pb-12 px-6 md:px-12 border-t border-white/10 text-[#a1a1a6] text-xs">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-16 gap-8">
          <div className="w-full md:w-1/4">
            <h3 className="text-white text-lg font-medium tracking-tight mb-4">VisioPro</h3>
            <p className="mb-4">The era of spatial computing is here, where digital content blends seamlessly with your physical space.</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">YouTube</a>
            </div>
          </div>
          
          <div className="w-full md:w-1/4 flex flex-col gap-3">
            <h4 className="text-white font-medium mb-1">Explore</h4>
            <a href="#" className="hover:text-white transition-colors">Mac</a>
            <a href="#" className="hover:text-white transition-colors">iPad</a>
            <a href="#" className="hover:text-white transition-colors">iPhone</a>
            <a href="#" className="hover:text-white transition-colors">Watch</a>
            <a href="#" className="hover:text-white transition-colors">Vision</a>
          </div>

          <div className="w-full md:w-1/4 flex flex-col gap-3">
            <h4 className="text-white font-medium mb-1">Account</h4>
            <a href="#" className="hover:text-white transition-colors">Manage Your ID</a>
            <a href="#" className="hover:text-white transition-colors">Store Account</a>
            <a href="#" className="hover:text-white transition-colors">iCloud.com</a>
          </div>

          <div className="w-full md:w-1/4 flex flex-col gap-3">
            <h4 className="text-white font-medium mb-1">About</h4>
            <a href="#" className="hover:text-white transition-colors">Newsroom</a>
            <a href="#" className="hover:text-white transition-colors">Leadership</a>
            <a href="#" className="hover:text-white transition-colors">Career Opportunities</a>
            <a href="#" className="hover:text-white transition-colors">Investors</a>
            <a href="#" className="hover:text-white transition-colors">Ethics & Compliance</a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>Copyright © 2026 VisioPro Inc. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Sales and Refunds</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <a href="#" className="hover:text-white transition-colors">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
