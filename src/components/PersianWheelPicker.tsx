import { StyleSheet, View, ViewStyle, TextStyle } from "react-native";
import React, { useState } from "react";
import { Picker } from "react-native-wheel-pick";
import { persianToEnglish, toFarsiDigits } from "../utils";

export interface PersianWheelPickerProps {
  /**
   * Range of years to display
   */
  yearRange?: {
    start: number;
    end: number;
  };
  /**
   * Custom styles for the container
   */
  containerStyle?: ViewStyle;
  /**
   * Custom styles for the picker
   */
  pickerStyle?: ViewStyle;
  /**
   * Custom styles for the picker text
   */
  textStyle?: TextStyle;
  /**
   * Color of the selected line
   */
  selectLineColor?: string;
  /**
   * Size of the selected line
   */
  selectLineSize?: number;
  /**
   * Custom month names (optional)
   */
  monthNames?: string[];
  /**
   * Callback when date changes
   */
  onChange?: (date: { year: number; month: number; day: number }) => void;
}

const defaultMonthNames = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

const PersianWheelPicker: React.FC<PersianWheelPickerProps> = ({
  yearRange = { start: 1330, end: 1400 },
  containerStyle,
  pickerStyle,
  textStyle,
  selectLineColor = "#A3E635",
  selectLineSize = 4,
  monthNames = defaultMonthNames,
  onChange,
}) => {
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(monthNames[0]);
  const [year, setYear] = useState(yearRange.start);

  const dayList = Array(31)
    .fill(0)
    .map((_, i) => i + 1);

  const yearList = Array(yearRange.end - yearRange.start + 1)
    .fill(0)
    .map((_, i) => yearRange.start + i);

  const handleDateChange = (
    newYear?: number,
    newMonth?: string,
    newDay?: number
  ) => {
    const updatedYear = newYear ?? year;
    const updatedMonth = newMonth ?? month;
    const updatedDay = newDay ?? day;
    const converYearToEnglish = persianToEnglish(updatedYear);
    const convertDayToEnglish = persianToEnglish(updatedDay);
    onChange?.({
      year: converYearToEnglish,
      month: monthNames.indexOf(updatedMonth) + 1,
      day: convertDayToEnglish,
    });
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.row}>
        <View style={styles.col}>
          <Picker
            style={[styles.picker, pickerStyle]}
            selectedValue={year}
            pickerData={yearList.map((item) => toFarsiDigits(item.toString()))}
            onValueChange={(value: number) => {
              setYear(value);
              handleDateChange(value);
            }}
            itemStyle={[styles.itemStyle, textStyle]}
            isShowSelectBackground={false}
            isShowSelectLine={true}
            selectLineSize={selectLineSize}
            selectLineColor={selectLineColor}
            textColor={"#F8F4ED"}
          />
        </View>
        <View style={styles.col}>
          <Picker
            style={[styles.picker, pickerStyle]}
            selectedValue={month}
            pickerData={monthNames.map((item) => toFarsiDigits(item))}
            onValueChange={(value: string) => {
              setMonth(value);
              handleDateChange(undefined, value);
            }}
            itemStyle={[styles.itemStyle, textStyle]}
            isShowSelectBackground={false}
            isShowSelectLine={true}
            selectLineSize={selectLineSize}
            selectLineColor={selectLineColor}
            textColor={"#F8F4ED"}
          />
        </View>
        <View style={styles.col}>
          <Picker
            style={[styles.picker, pickerStyle]}
            selectedValue={day}
            pickerData={dayList.map((item) => toFarsiDigits(item.toString()))}
            onValueChange={(value: number) => {
              setDay(value);
              handleDateChange(undefined, undefined, value);
            }}
            itemStyle={[styles.itemStyle, textStyle]}
            isShowSelectBackground={false}
            isShowSelectLine={true}
            selectLineSize={selectLineSize}
            selectLineColor={selectLineColor}
            textColor={"#F8F4ED"}
          />
        </View>
      </View>
    </View>
  );
};

export default PersianWheelPicker;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  picker: {},
  col: {
    flex: 1,
  },
  itemStyle: {},
});
