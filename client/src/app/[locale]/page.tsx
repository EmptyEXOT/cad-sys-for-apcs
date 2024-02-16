import {useTranslations} from 'next-intl'
import Section from "@/shared/Section/Section";
import {Sections} from "@/shared/sections/sections";
import classNames from "classnames";
import ImagePlaceholder from "@/shared/Placeholder/ImagePlaceholder/ImagePlaceholder";
import React from "react";
import HomeSection from "@/sections/HomeSection/HomeSection";
import Test from "@/widgets/Test/Test";
import {Provider} from "react-redux";
import StoreProvider from "@/shared/store/StoreProvider";
import Button from "@/shared/ui/Button/Button";

export default function Home() {
    const t = useTranslations('Sections')
    return (
        <main className="">



            <HomeSection/>
            <StoreProvider>

                <Test></Test>
            </StoreProvider>

            <Section id={Sections.Gallery} className={classNames('pt-24')}>
                <div className={classNames('flex flex-col gap-16')}>
                    <div className={classNames('flex flex-col gap-8 text-center')}>
                        <h1 className={classNames('text-5xl font-bold leading-snug')}>
                            Diverse Functionalities and Tools for Automated Process Control Design
                        </h1>
                        <p className={classNames('text-2xl leading-normal')}>
                            Our CAD platform offers a wide range of functionalities and tools to cater to every aspect
                            of automated process control design.
                        </p>
                        <div className={classNames('flex gap-4 flex-col')}>
                            <Button border={true}>{t('Services.Buttons.learn_more')}</Button>
                            <Button border={false} fill={false}>{t('Services.Buttons.sign_up')}</Button>
                        </div>
                    </div>
                    <div className={classNames('flex flex-col gap-8 text-center')}>
                        <h1 className={classNames('text-5xl font-bold leading-snug')}>
                            Efficient Design and Simulation Capabilities
                        </h1>
                        <p className={classNames('text-2xl leading-normal')}>
                            Experience the power of our CAD platform's efficient design and simulation capabilities.
                        </p>
                        <div className={classNames('flex gap-4 flex-col')}>
                            <Button border={true}>Get Started</Button>
                            <Button border={false} fill={false}>Sign Up</Button>
                        </div>
                    </div>
                    <div className={classNames('flex flex-col gap-8 text-center')}>
                        <h1 className={classNames('text-5xl font-bold leading-snug')}>
                            Collaborative Workflow and Project Management
                        </h1>
                        <p className={classNames('text-2xl leading-normal')}>
                            Streamline your workflow and manage projects seamlessly with our collaborative features.
                        </p>
                        <div className={classNames('flex gap-4 flex-col')}>
                            <Button border={true}>Try Now</Button>
                            <Button border={false} fill={false}>Request Demo</Button>
                        </div>
                    </div>
                </div>
            </Section>
            <Section id={Sections.Gallery} className={classNames('pt-24')}>
                <div className={classNames('flex flex-col gap-10')}>
                    <div className={classNames('flex flex-col gap-8')}>
                        <h2 className={classNames('text-2xl font-extrabold leading-snug')}>
                            Efficiency
                        </h2>
                        <h1 className={classNames('text-5xl font-bold leading-snug')}>
                            Streamline Your Manufacturing Process with CAD Services
                        </h1>
                        <p className={classNames('text-2xl leading-normal')}>
                            Our CAD services offer increased efficiency, accuracy, and customization options for
                            manufacturers. With our advanced computer-aided design tools, you can optimize your process
                            control systems and enhance productivity. Experience the benefits of precise designs and
                            seamless integration.
                        </p>
                    </div>
                    <div className={classNames('flex flex-col gap-4')}>
                        <h2 className={classNames('text-3xl font-bold leading-snug')}>
                            Accuracy
                        </h2>
                        <p className={classNames('text-2xl leading-normal')}>
                            Create precise and error-free designs with our CAD services.
                        </p>
                    </div>
                    <div className={classNames('flex flex-col gap-4')}>
                        <h2 className={classNames('text-3xl font-bold leading-snug')}>
                            Customization
                        </h2>
                        <p className={classNames('text-2xl leading-normal')}>
                            Tailor your process control systems to meet your specific manufacturing requirements.
                        </p>
                    </div>
                    <div className={classNames('flex gap-4 flex-col')}>
                        <Button border={true}>Get Started</Button>
                        <Button border={false} fill={false}>Sign Up</Button>
                    </div>
                </div>
            </Section>
            <Section id={Sections.Gallery} className={classNames('pt-24')}>
                <div className={classNames('flex flex-col gap-20 text-center')}>
                    <div className={classNames('flex flex-col gap-8')}>
                        <h2 className={classNames('text-2xl font-extrabold leading-snug')}>
                            Simplify
                        </h2>
                        <h1 className={classNames('text-5xl font-bold leading-snug')}>
                            Design Your Automated Process Control Systems Easily
                        </h1>
                        <p className={classNames('text-2xl leading-normal')}>
                            Our digital platform empowers clients to effortlessly design their automated process control
                            systems. With user-friendly tools and intuitive features, you can bring your ideas to life
                            in no time.
                        </p>
                    </div>
                    <div className={classNames('flex flex-col gap-4')}>
                        <h2 className={classNames('text-3xl font-bold leading-snug')}>
                            Streamlined Design Process
                        </h2>
                        <p className={classNames('text-2xl leading-normal')}>
                            COur platform offers a streamlined design process, allowing you to efficiently create
                            automated process control systems that meet your specific requirements.
                        </p>
                    </div>
                    <div className={classNames('flex flex-col gap-4')}>
                        <h2 className={classNames('text-3xl font-bold leading-snug')}>
                            Collaborate and Share
                        </h2>
                        <p className={classNames('text-2xl leading-normal')}>
                            Collaborate with your team and easily share your designs to gather feedback and make
                            improvements, ensuring the success of your automated process control systems.
                        </p>
                    </div>
                    <div className={classNames('flex flex-col gap-4')}>
                        <h2 className={classNames('text-3xl font-bold leading-snug')}>
                            Seamless Integration
                        </h2>
                        <p className={classNames('text-2xl leading-normal')}>
                            Our platform seamlessly integrates with existing manufacturing systems, making it easy to
                            implement your automated process control systems without any disruptions.
                        </p>
                    </div>
                    <div className={classNames('flex gap-4 flex-col')}>
                        <Button border={true}>Get Started</Button>
                        <Button border={false} fill={false}>Sign Up</Button>
                    </div>
                </div>
            </Section>
            <Section id={Sections.Feature} className={classNames('pt-24')}>
                <div className={classNames('flex flex-col gap-8')}>
                    <h2 className={classNames('text-2xl font-extrabold leading-snug')}>
                        Innovate
                    </h2>
                    <h1 className={classNames('text-5xl font-bold leading-snug')}>
                        Transforming Industries Through Customized Automation Solutions
                    </h1>
                    <p className={classNames('text-2xl leading-normal')}>
                        At our digital platform, we specialize in developing custom services for manufacturing
                        enterprises, providing computer-aided design solutions for automated process control systems.
                        Our mission is to revolutionize industries by delivering innovative and tailored automation
                        solutions that optimize efficiency and productivity.
                    </p>
                    <div className={classNames('flex gap-4 flex-col')}>
                        <Button border={true}>Learn More</Button>
                        <Button border={false} fill={false}>Sign Up {'>'}</Button>
                    </div>
                    <div className={classNames('flex flex-col justify-center lg:flex-1')}>
                        <div className={classNames('flex justify-center')}>
                            <div className={classNames('square')}>
                                <ImagePlaceholder classNames={classNames('h-full absolute')}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
