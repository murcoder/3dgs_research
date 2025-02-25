

const DiscordButton = () => {
  return (
    <div className="absolute z-50 bottom-4 right-4 flex">
      <a
        href="https://discord.com/invite/73WrkDWEE2"
        target="_blank"
        rel="noopener noreferrer"
        className="shadow-[4px_4px_8px_0px_rgba(0,_0,_0,_0.35)] bg-black text-white font-bold py-4 px-4 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-500">
        <img src="./icons/discord_white.svg" alt="Logo" className="h-8 w-8 fill-black" />
      </a>
    </div>
  );
};

export default DiscordButton;
