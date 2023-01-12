import { guestItems, menuItems } from "@utils/mock";
import useDimensions from "@utils/useDimensions";
import { BoxArrowRight } from "@yukgetir-icons";
import { useRouter } from "next/router";
import { useRef } from "react";
import { FiX } from "react-icons/fi";
import { useSelector } from "react-redux";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { selectAuth, signout } from "stores/slices/authSlice";
import { useAppDispatch } from "stores/store";
import { useModal } from "../../@shared/contexts/ModalContext";
import { useState } from "react";

export const Sidebar = ({ mobile, setMobile }: any) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { pathname } = router;
  const [ref, { height }]: any = useDimensions();
  const { isAuth } = useSelector(selectAuth);
  const { setShow } = useModal();

  const logo = (
    <img
      src="/logo.png"
      alt="yukgetir logo"
      className="logo cursor-pointer"
      height={150}
      onClick={() => router.push("/", undefined, { shallow: true })}
    />
  );
  return (
    <>
      <div id="sidebar" className="transitionable" ref={ref}>
        {!mobile ? (
          logo
        ) : (
          <div className="flex justify-between items-start w-full">
            {logo}
            <div
              className="p-2 rounded-full cursor-pointer hover:bg-gray-200 flex items-center justify-center"
              onClick={() => setMobile(false)}
            >
              <FiX size={23} className="text-gray-500" />
            </div>
          </div>
        )}

        <ul className="menu">
          <SimpleBar style={{ maxHeight: height - 260 || 400 }}>
            {isAuth &&
              menuItems.map((item, key: number) => (
                <MenuItem
                  item={item}
                  key={`menu-item-${key}`}
                  pathname={pathname}
                  setShowFeedback={setShow}
                />
              ))}
            {!isAuth &&
              guestItems.map((item, key: number) => (
                <MenuItem
                  item={item}
                  key={`menu-item-${key}`}
                  pathname={pathname}
                  setShowFeedback={setShow}
                />
              ))}
          </SimpleBar>
        </ul>
                {isAuth && (
                    <ul className="footer"
                    onClick={()=>{
                        dispatch(signout())
                    }}
                    >
                        <li className="justify-center cursor-pointer">
                            <BoxArrowRight className="menu-icon" />
                            <p className="text-yg-gray">Çıkış Yap</p>
                        </li>
                    </ul>
                )}
                <p className="text-yg-gray text-xs text-center my-2">©️ 2020 - 2022 Bilinova Bilişim A.Ş.</p>
            </div>  
    )
}

export const MenuItem = ({item, pathname}:any) => {
    const router = useRouter();
    const ref = useRef(null);
    return(
        <li 
            ref={ref}
            className={`${item.path==pathname?`active`:''} text`}
            onClick={()=>{  
                // router.push(item.path, undefined, { shallow: true })
            }}
          >
            <li className="justify-center cursor-pointer">
              <BoxArrowRight className="menu-icon" />
              <p className="text-yg-gray">Çıkış Yap</p>
            </li>
          </ul>
        )}
        <p className="text-yg-gray text-xs text-center my-2">
          ©️ 2020 - 2022 Bilinova Bilişim A.Ş.
        </p>
      </div>
    </>
  );
};

export const MenuItem = ({ item, pathname, setShowFeedback }: any) => {
  const router = useRouter();
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className={`${item.path == pathname ? `active` : ""} text`}
      onClick={() => {
        // router.push(item.path, undefined, { shallow: true })
      }}
      onMouseDown={(e: any) => {
        e.preventDefault();
        if (item.title === "Geri Bildirim") return setShowFeedback(true);
        if (e.button === 1) window.open(item.path, "_blank");

        if (e.which === 3) window.open(item.path, "_blank");
      }}
    >
      <a href={item.path} className="flex items-start text-base">
        {item.icon}
        <p>{item.title}</p>
      </a>
    </li>
  );
};
