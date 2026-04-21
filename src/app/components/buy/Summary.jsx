const Summary = () => {
  return (
    <div className="flex flex-col items-end gap-4 mt-10">
      <div className="w-full space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-mono">XXXXXX</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="font-medium">FREE</span>
        </div>

        <hr className="border-[#B9C6CB]" />

        <div className="flex justify-between text-2xl font-normal pt-4">
          <span>Total</span>
          <span className="font-mono">XXXX</span>
        </div>
      </div>

      <button className="mt-4 bg-[#6BB6B9] hover:bg-teal-500 text-black px-10 py-3 rounded-full font-medium transition-colors">Go to checkout</button>
    </div>
  );
};

export default Summary;
