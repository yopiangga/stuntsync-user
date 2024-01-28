import { ButtonComponent } from "src/components/button";
import { NavbarDefaultComponent } from "src/components/navbar";
import imageUser from "src/assets/images/user.png";
import { BottomNavbarComponent } from "src/components/navbar/BottomNavbarComponent";

export function ProfilePage() {
  return (
    <div className="flex flex-col items-center">
      <NavbarDefaultComponent title="My Profile" type="dark" />
      <div className="w-11/12 mt-6">
        <div className="grid grid-cols-12 gap-6 lg:w-[900px] mx-auto">
          <div className="lg:col-span-6 col-span-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="rounded-circle">
                <img src={imageUser} className="rounded-full w-20 h-20" />
              </div>
              <div className="">
                <h4 className="f-h4">Alfian Prisma Yopiangga</h4>
                <p className="f-p1-r">Pria</p>
              </div>
            </div>
            <div className="mb-3">
              <p className="f-p1-sb">Email</p>
              <p className="f-p1-r">yopigambyok@gmail.com</p>
            </div>
            <div className="mb-3">
              <p className="f-p1-sb">Alamat</p>
              <p className="f-p1-r">
                RT 14 RW 05 Desa Gambyok Kecamatan Grogol Kabupaten Kediri
              </p>
            </div>
            <div className="mb-3 mt-6 flex gap-2 flex-col">
              <ButtonComponent
                title="Log Out"
                action={async () => {}}
                color="bg-black-main"
              />

              <ButtonComponent
                title="Change Password"
                action={() => {}}
                color="bg-slate-400"
              />
            </div>
          </div>
          <div className="col-span-1 lg:block hidden">
            <div className="h-full mx-auto w-0.5 bg-neutral-500"></div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <BottomNavbarComponent />
      </div>
    </div>
  );
}
