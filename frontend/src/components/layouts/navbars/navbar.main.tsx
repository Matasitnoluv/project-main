import { TabNav } from "@radix-ui/themes";

const NavbarMain = () => {
  return (
    <div className="flex flex-row py-4 justify-between">
      <div className="">
        <img
          alt="Your Company"
          src="https://cdn.discordapp.com/attachments/1274988572679864412/1289996431712845905/Logo.png?ex=675c694c&is=675b17cc&hm=3ac7471fa8550f5b6e2921e57168a3c111c267295541405db5e1927df7351433&"
          className="h-14 mx-8"
        />
      </div>
      <div className="flex flex-row-reverse p-2 mx-2">
        <TabNav.Root>
          <TabNav.Link href="#">
            Home
          </TabNav.Link>
          <TabNav.Link href="commingsoon">Monitor</TabNav.Link>
          <TabNav.Link href="Msproduct">Report Product</TabNav.Link>
          <TabNav.Link href="Msbox">Report Box</TabNav.Link>
          <TabNav.Link href="calculationproductbox">Calculation</TabNav.Link>
          <TabNav.Link href="commingsoon">Export</TabNav.Link>
          <TabNav.Link href="/">Log Out</TabNav.Link>
        </TabNav.Root>
      </div>
    </div>
  );
};

export default NavbarMain;
