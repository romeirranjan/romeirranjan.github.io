declare module 'lucide-react/dist/esm/icons/*.mjs' {
  import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react'

  const Icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> &
      RefAttributes<SVGSVGElement> & {
        size?: string | number
        nonScalingStroke?: boolean
      }
  >

  export default Icon
}
