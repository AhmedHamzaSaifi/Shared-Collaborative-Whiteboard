"use client";

import { CustomColorPicker } from "@/components/custom-color-picker";
import { colorToCss, cssToColor } from "@/lib/utils";
import { Color } from "@/types/canvas";
import { useState } from "react";
interface ColorPickerProps {
  onChange: (color: Color) => void;
  lastUsedColor: Color;
}

export const ColorPicker = ({ onChange, lastUsedColor }: ColorPickerProps) => {
  const [color, setColor] = useState(colorToCss(lastUsedColor));
  return (
    <div className="flex flex-wrap gap-2 items-center max-w-[164px] pr-2 mr-2 border-r border-neutral-200">
      <ColorButton color={{ r: 243, g: 82, b: 35 }} onClick={onChange} />
      <ColorButton color={{ r: 255, g: 249, b: 177 }} onClick={onChange} />
      <ColorButton color={{ r: 68, g: 202, b: 99 }} onClick={onChange} />
      <ColorButton color={{ r: 39, g: 142, b: 237 }} onClick={onChange} />
      <ColorButton color={{ r: 155, g: 105, b: 245 }} onClick={onChange} />
      <ColorButton color={{ r: 252, g: 142, b: 42 }} onClick={onChange} />
      <ColorButton color={{ r: 0, g: 0, b: 0 }} onClick={onChange} />
      <CustomColorPicker
        lastUsedColor={lastUsedColor}
        className="w-8 h-8 rounded-full"
        value={color}
        onChange={(color) => {
          setColor(color);
          onChange(cssToColor(color));
        }}
      />
    </div>
  );
};

interface ColorButtonProps {
  color: Color;
  onClick: (color: Color) => void;
}

const ColorButton = ({ color, onClick }: ColorButtonProps) => {
  return (
    <button
      className="w-8 h-8 items-center flex justify-center hover:opacity-75 transition"
      onClick={() => onClick(color)}
    >
      <div
        className="h-8 w-8 rounded-md border border-neutral-300"
        style={{ backgroundColor: colorToCss(color) }}
      />
    </button>
  );
};
