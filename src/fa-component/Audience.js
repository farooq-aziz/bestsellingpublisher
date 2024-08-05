import React from "react"
import Image from "next/image"
import styles from "@/styles/Audience.module.css"
import { Container, Row, Col } from "react-bootstrap"
// images
import audience from "media/images/flods/audience1.png"
import { MRCTA } from "@/component"

const Audience = () => {

    const openLiveChat = (e) => {
        e.preventDefault();
        if (window.LiveChatWidget) {
            window.LiveChatWidget.call('maximize');
        }
    };

    return (
        <>
            <section className={`${styles.audienceFlod} bg-prime`}>
                <div className='mr-container px-md-4'>
                    <Row className={`${styles.audienceRow} justify-content-center align-items-center`}>
                        <Col lg={6} sm={12}>
                            <div className={styles.audienceTxt}>
                                <h2 className='font-50 fw-300 font-primary txt-white mb-3'><span className='bg-black txt-white mt-2 p-1 font-45 fw-500 d-block'>Digital Publishing Services</span> That Amplifies Your Voice  Publishing Services</h2>
                                <p className='font-15 font-secondary txt-white mb-2'>Let us transform your written words into global conversations, connecting your stories with every corner of the world.</p>
                                <p className='font-15 font-secondary txt-white mb-2'><strong><em>Your Story Deserves to Shine!</em></strong></p>
                                <div className="grid grid-cols-1 mr-sm:flex gap-3">
                                    <MRCTA
                                        text="Connect with Us!"
                                        classes="hover:!bg-white hover:!text-black rounded-sm bg-black"
                                        handle="onclick='parent.LC_API.open_chat_window();return false;'"
                                    />
                                    <MRCTA
                                        text="Call us NOW!"
                                        link="tel:8007819093"
                                        bg="bg-transparent"
                                        color="!text-black"
                                        border="border-black hover:!bg-black hover:border-transparent rounded-sm hover:!text-white"
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className={styles.audienceImg}>
                                <Image quality={100}  className='img-fluid'
                                    src={audience}
                                    alt='Best_Publisher'
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Audience