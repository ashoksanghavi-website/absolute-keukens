import {
  Layers,
  PanelsTopLeft,
  Square,
  GripHorizontal,
  Leaf,
  Wallet,
  Clock,
  ShieldCheck,
  Camera,
  Ruler,
  Palette,
  type LucideProps,
} from "lucide-react";

/**
 * Central icon map. Deliberately uses craft / material iconography
 * (never robot, chip or AI motifs) so the fotoscan tool reads as a
 * premium measuring instrument rather than a gimmick.
 */
const ICONS = {
  layers: Layers,
  panels: PanelsTopLeft,
  slab: Square,
  handle: GripHorizontal,
  leaf: Leaf,
  wallet: Wallet,
  clock: Clock,
  shield: ShieldCheck,
  camera: Camera,
  ruler: Ruler,
  palette: Palette,
} as const;

export type IconName = keyof typeof ICONS;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = ICONS[name];
  return <Cmp {...props} />;
}
