import React, { useState } from 'react'
import styles from '@/styles/Bookbadges.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Modal from 'react-bootstrap/Modal';
import Freequote from './Freequote'
// images
import bookbadges4 from 'media/images/bookbadges/4.png'
import bookbadges5 from 'media/images/bookbadges/5.png'
// mport { Fade } from "react-awesome-reveal";


const BookWriting = () => {


    const [show, setShow] = useState(false);

    function modal(e) { e.preventDefault(); setShow(true); }
    function closemodal() { setShow(false); }


    const data = [

        {
            title: 'STANDARD',
            para: 'Creative content with a range of 200-300 pages.',
            btnname: 'Get A Quote',
            bookbadges1: bookbadges4,
        },

        {
            title: 'PREMIUM',
            para: 'Creative content with a range of 200-300 pages.',
            btnname: 'Get A Quote',
            bookbadges1: bookbadges5,
        },

    ];




    return (
        <>

            <div className={styles.bookbadges}>

                <Container className='bookalign'>
                    <Row className={` ${styles.bookrow} gy-3 `}>

                        <Col md={12}>
                            <h2 className='font50 fw700 color-blue text-center mb-5 font-secondary'>Book Writing</h2>
                        </Col>

                        {data.map((post, i) => (
                            <Col md={6} key={i}>

                               
                                    <Row className={`${styles.bookcontent} content`} >
                                        <Col md={8}>
                                            <div>

                                                <h2 className="fw700 font40 color-blue font-f"> {post.title}</h2>
                                                <h4 className={`${styles.marketing} fw500 font20 font-f`}> {post.subtitle}</h4>
                                                <p className='font15  textcolor font-f mb-4'>{post.para}</p>
                                                <span onClick={modal} className={styles.quote} href="">{post.btnname}</span>

                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <Image quality={100}    src={post.bookbadges1} alt='book_writing_cube' className='img-fluid'></Image>
                                        </Col>
                                    </Row>
                                
                            </Col>
                        ))}
                    </Row>
                </Container>

                <Modal show={show} onHide={closemodal} className={styles.modalnew}>
                    <Modal.Body> <Freequote formsaspire='popquote' /> <span onClick={closemodal} className={styles.cross}>x</span> </Modal.Body>


                </Modal>


            </div>

        </>
    )
}

export default BookWriting