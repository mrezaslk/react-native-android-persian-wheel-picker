# 📆 React Native Android Persian Wheel Picker

A customizable Persian (Jalali) wheel picker component for React Native Android applications.

## Installation

```bash
npm install react-native-android-persian-wheel-picker
# or
yarn add react-native-android-persian-wheel-picker
```

## Dependencies

This package requires the following peer dependencies:
- react-native
- react-native-wheel-pick

## Font Configuration

To support Persian (or any other custom) fonts in the wheel picker, you need to define the font in your Android styles. Add the following to your `android/app/src/main/res/values/styles.xml` file:

```xml
<resources>
    <style name="AppTheme" parent="Theme.AppCompat.DayNight.NoActionBar">
        <!-- ... other styles ... -->
        <item name="wheel_font_path">fonts/your_persian_font</item>
    </style>
</resources>
```

Make sure to:
1. Place your font file in the `android/app/src/main/res/font/` directory
2. Reference the font file name (without extension) in the `fontFamily` attribute
3. If the `font` directory doesn't exist, create it first

Without this configuration, the wheel picker will not display Persian text correctly.

## Usage

![Persian Wheel Picker Demo](./src/assets/calendar.jpg)

```tsx
import PersianWheelPicker from 'react-native-android-persian-wheel-picker';

const MyComponent = () => {
  const handleDateChange = (date: {year: number; month: number; day: number}) => {
    console.log('Selected date:', date);
  };

  return (
    <PersianDatePicker
      initialDate={{year: 1370, month: 1, day: 1}}
      yearRange={{start: 1330, end: 1400}}
      onChange={handleDateChange}
      selectLineColor="#A3E635"
      selectLineSize={4}
    />
  );
};
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| initialDate | `{year: number; month: number; day: number}` | `{year: 1370, month: 1, day: 1}` | Initial selected date |
| yearRange | `{start: number; end: number}` | `{start: 1330, end: 1400}` | Range of years to display |
| containerStyle | `ViewStyle` | - | Custom styles for the container |
| pickerStyle | `ViewStyle` | - | Custom styles for the picker |
| textStyle | `TextStyle` | - | Custom styles for the picker text |
| selectLineColor | `string` | `'#A3E635'` | Color of the selected line |
| selectLineSize | `number` | `4` | Size of the selected line |
| monthNames | `string[]` | Persian month names | Custom month names |
| onChange | `(date: {year: number; month: number; day: number}) => void` | - | Callback when date changes |

## Customization Example

```tsx
<PersianDatePicker
  initialDate={{year: 1399, month: 1, day: 1}}
  yearRange={{start: 1350, end: 1400}}
  containerStyle={{backgroundColor: '#1a1a1a'}}
  pickerStyle={{backgroundColor: '#2a2a2a'}}
  textStyle={{color: '#ffffff', fontSize: 16}}
  selectLineColor="#FF0000"
  selectLineSize={2}
  onChange={(date) => console.log(date)}
/>
```

## License

MIT
