import {cva} from 'class-variance-authority';
import { HTMLAttributes } from 'react';

const classes = cva('bg-gradient-to-b to-gray-950 rounded-full', {
    variants: {
        size: {
            xxs: 'size-4',
            xs: 'size-6',
            sm: 'size-8',
            md: 'size-10',
            lg: 'size-8',
        },
        color: {
            violet: 'from-violet-400',
            teal: 'from-teal-400',
            fuchsia: 'from-fuchsia-400',
            pink: 'from-pink-400',
            yellow: 'from-yellow-600',
            green: 'from-green-400',
            Stone: 'from-stone-400',
            orange: 'from-orange-800',
        }
    },
 
    defaultVariants: {
        size: 'lg',
        color: 'violet',
    }
})
const Planet = (props: {
    size?: 'xxs'|'xs'|'sm' | 'md' | 'lg';
    color?: 'violet' | 'teal' | 'fuchsia'|'yellow'|'pink'|'green'|'Stone'|'orange';
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={classes({
     size: props.size,
     color: props.color,
     className: props.className,   
    })}></div>
  )
}
export default Planet