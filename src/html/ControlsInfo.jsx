

function ControlsInfo() {
  return (
    <div id="infoText" className="fixed bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center mb-6">
      <img src="./keyControls.png" alt="Control keys" className="w-24 mb-2" />
      <p className="text-sm text-center text-white">
        Research Project by<br />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/murcoder"
          className="text-black-600 hover:underline">
          Christoph Murauer
        </a>
      </p>
    </div>
  );
}

export default ControlsInfo;
