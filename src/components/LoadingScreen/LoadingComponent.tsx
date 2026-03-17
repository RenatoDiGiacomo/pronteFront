const LoadingComponent = (loading: boolean) => {
  return (
    <div
      className={
        loading
          ? "grid fixed inset-0 z-50 place-items-center bg-slate-950/50 backdrop-blur-[1px]"
          : "hidden"
      }
    >
      <div className="flex flex-col items-center gap-4 px-6">
        <img
          src="/logo1.svg"
          alt="Carregando"
          className="w-[min(56vw,230px)] h-auto"
        />

        <div className="flex items-center gap-2.5">
          <span
            className="h-2.5 w-2.5 rounded-full bg-amber-400 animate-bounce [animation-duration:1s]"
            style={{ animationDelay: "0s" }}
          />
          <span
            className="h-2.5 w-2.5 rounded-full bg-amber-400 animate-bounce [animation-duration:1s]"
            style={{ animationDelay: "0.15s" }}
          />
          <span
            className="h-2.5 w-2.5 rounded-full bg-amber-400 animate-bounce [animation-duration:1s]"
            style={{ animationDelay: "0.3s" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;
