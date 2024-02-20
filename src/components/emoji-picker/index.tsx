import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

type Props = {
  onClose: () => void;
  onSelect: (emoji: any) => void;
  bottom?: string;
  customStyles?: string;
};

const EmojiPicker = ({
  onClose,
  onSelect,
  bottom = "bottom-[50px]",
  customStyles,
}: Props) => {
  return (
    <>
      <div onClick={onClose} className="fixed inset-0 z-[5]"></div>
      <div
        className={`absolute ${bottom} z-[10] ${customStyles} shadow-search-shadow rounded-[10px]`}
      >
        <Picker
          theme="auto"
          onClick={(e: any) => e.stopPropagation()}
          data={data}
          onEmojiSelect={onSelect}
          navPosition="bottom"
          previewPosition="none"
          maxFrequentRows={2}
          perLine={8}
        />
      </div>
    </>
  );
};

export default EmojiPicker;
