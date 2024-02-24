import FormatDescription from "./FormatDescription";

interface PopUpDescInterface {
  desc: string;
  handlePopUp: () => void; 
}

export function PopUpDesc(prop: PopUpDescInterface) {
  return (
    <>
      <div onClick={prop.handlePopUp} className="z-20 fixed inset-0 bg-gray-900 bg-opacity-50"></div>
      <div className="overflow-y-auto m-5 z-30 fixed inset-0 bg-white p-8 rounded-lg shadow-lg">
        <button
          className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700"
          onClick={prop.handlePopUp}
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <FormatDescription desc={prop.desc}/>
      </div>
    </>
  );
}
