import React, { PropsWithChildren } from "react";

const styles = {
  header: {},
};

interface IMainLayout {
  logoUrl?: string;
}

const MainLayout = ({ logoUrl, children }: PropsWithChildren<IMainLayout>) => {
  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <header className="bg-gray-600 p-2">Cryptex Spotify</header>
      <div className="p-4 flex flex-1">{children}</div>
      <footer className="bottom-0 p-4 bg-[#2B2B2B] min-h-[10rem]">
        <div className="logo font-bold text-lg">Cryptex Spotify</div>
      </footer>
    </div>
  );
};

export default MainLayout;
