import React from "react";
import SelectedOptionCardUnit from "./SelectedOptionCardUnit";

interface SelectedOption {
  type: string;
  optionId?: number;
  data?: string;
}

interface SelectedOptionAndQuantity {
  optionCombId: number;
  optionComb: SelectedOption[];
  quantity: number;
}

const SelectedOptionCardList = ({
  selectOption,
  sellingPrice,
  deleteOption,
  onQuantityChange,
}: {
  selectOption: SelectedOptionAndQuantity[];
  sellingPrice: number;
  deleteOption: (optionCombId: number) => void;
  onQuantityChange: (optionCombId: number, newQuantity: number) => void;
}) => {
  return (
    <div className="overflow-hidden  pt-[12px] px-[15px]">
      {selectOption
        .slice()
        .reverse()
        .map((option, index) => (
          <SelectedOptionCardUnit
            key={index}
            seq={index}
            option={option}
            sellingPrice={sellingPrice}
            deleteOption={deleteOption}
            onQuantityChange={onQuantityChange}
          />
        ))}
    </div>
  );
};

export default SelectedOptionCardList;
