import { useState } from "react";
import { Mail, Gift } from "lucide-react";
import { Button } from "@heroui/react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

export default function OfferSection() {
  const [email, setEmail] = useState("");

  return (
    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-8 text-center rounded-2xl shadow-lg mt-10 max-w-3xl mx-auto">
      <div className="flex justify-center items-center gap-2 mb-3">
        <Gift size={28} />
        <h2 className="text-2xl font-bold">🔥 Get Exclusive Sneaker Deals!</h2>
      </div>
      <p className="text-lg mb-5">
        Subscribe now and enjoy special discounts, early access to new arrivals,
        and more! 🎉
      </p>
      <div className="flex justify-center items-center gap-2 max-w-md mx-auto">
        <div className="relative w-full">
          <Mail
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="pl-10 pr-3 py-2 w-full rounded-md text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-10 py-2 font-semibold">
          Claim My Offer
        </Button>
      </div>
      <p className="mt-3 text-sm opacity-80">No spam, unsubscribe anytime.</p>
    </div>
  );
}
