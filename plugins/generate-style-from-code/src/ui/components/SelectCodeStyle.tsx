import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import * as Select from '@radix-ui/react-select';

import { CssLogoIcon, JsonLogoIcon, StitchesLogoIcon, TailwindCssLogoIcon } from './icon';

const CODE_STYLES = [
  { name: 'css', fileType: 'css', logo: CssLogoIcon },
  { name: 'json', fileType: 'json', logo: JsonLogoIcon },
  { name: 'tailwindcss', fileType: 'javascript', logo: TailwindCssLogoIcon },
  { name: 'stitches', fileType: 'javascript', logo: StitchesLogoIcon },
];

interface SelectCodeStyleItemProps {
  value: string;
  children?: React.ReactNode;
}

const SelectCodeStyleItem = ({ children, value }: SelectCodeStyleItemProps) => {
  return (
    <Select.Item
      value={value}
      className="data-[state=checked]:bg-figma-bg-selected hover:bg-figma-bg-selected flex cursor-pointer items-center justify-between rounded p-2.5 outline-none"
    >
      <Select.ItemText asChild>
        <div className="flex items-center gap-x-1">{children}</div>
      </Select.ItemText>
      <Select.ItemIndicator className="inline-flex items-center justify-center">
        <CheckIcon className="text-figma-text-brand h-4 w-4" />
      </Select.ItemIndicator>
    </Select.Item>
  );
};

interface SelectRootProps {
  name: string;
  value: string;
  onValueChange: (value: string) => void;
}

const CodeStyleSelect = (props: SelectRootProps) => (
  <Select.Root {...props}>
    <Select.Trigger className="border-figma-border focus:fill-figma-border-selected flex w-60 items-center justify-between rounded-md border px-3 py-2.5 focus:outline-none">
      <Select.Value placeholder="Select your code style." />
      <Select.Icon>
        <ChevronDownIcon className="h-4 w-4" />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content
        className="bg-figma-bg border-figma-border w-full overflow-hidden rounded-md border shadow-xl"
        position="popper"
        side="bottom"
        sideOffset={4}
        style={{ width: 'var(--radix-select-trigger-width)' }}
      >
        <Select.Viewport className="flex flex-col gap-y-1 p-1.5">
          {CODE_STYLES.map(({ name, logo: Logo }) => (
            <SelectCodeStyleItem value={name} key={name}>
              <Logo className="h-6 w-6" />
              {name}
            </SelectCodeStyleItem>
          ))}
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

export default CodeStyleSelect;
