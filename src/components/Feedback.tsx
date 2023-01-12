import React, { useState } from "react";
import Modal from "../components/Modal";
import { Textarea } from "../@shared/elements/textareas";
import { useModal } from "@shared/contexts/ModalContext";

export const Feedback = () => {
  const [feedback, setFeedback] = useState<number | null>();
  const [value, setValue] = useState("");
  const { show, setShow } = useModal();

  const rating = [
    {
      rate: 1,
      passiveImg: "/assets/feedback/frown.svg",
      activeImage: "/assets/feedback/frown-active.svg",
    },
    {
      rate: 2,
      passiveImg: "/assets/feedback/neutral.svg",
      activeImage: "/assets/feedback/neutral-active.svg",
    },
    {
      rate: 3,
      passiveImg: "/assets/feedback/smile.svg",
      activeImage: "/assets/feedback/smile-active.svg",
    },
    {
      rate: 4,
      passiveImg: "/assets/feedback/wink.svg",
      activeImage: "/assets/feedback/wink-active.svg",
    },
    {
      rate: 5,
      passiveImg: "/assets/feedback/heart-eyes.svg",
      activeImage: "/assets/feedback/heart-eyes-active.svg",
    },
  ];

  const handleClick = (rate: number) => {
    setFeedback(rate);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Modal
        heading={"Uygulama İçi Geri Bildirim"}
        open={show}
        handleClose={handleClose}
        handleSubmit={() => {}}
      >
        <h6 className="text-base font-medium">Değerlendirme Yap</h6>
        <div className="flex p-4 bg-white w-100 justify-center gap-5">
          {rating.map((item) => (
            <div
              className="cursor-pointer"
              onClick={() => handleClick(item.rate)}
              key={item.rate}
            >
              <img
                src={
                  feedback === item.rate ? item.activeImage : item.passiveImg
                }
                alt={item.passiveImg}
              />
            </div>
          ))}
        </div>
        <h6 className="text-base font-medium">Yorum Yap</h6>
        <Textarea
          className="w-100"
          value={value}
          onChange={setValue}
          placeholder="Bu bölüme bizi değerlendirmek için yorum bırakabilirsiniz."
        />
      </Modal>
    </>
  );
};

export default Feedback;
