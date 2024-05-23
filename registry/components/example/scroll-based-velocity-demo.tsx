import { VelocityScroll } from "../magicui/scroll-based-velocity";

export default async function ScrollBasedVelocityDemo() {
    return(
        <VelocityScroll 
            text="Scroll"
            default_velocity={5}
            className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
        />
    );
}