import React, { useContext } from 'react';
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { newsContext } from '../NewsContext'

export const CardsLayout = (props) => {

    const { favorite } = useContext(newsContext);
    const [star, setFavorite] = favorite;

    return (
        <Card css={{ w: "100%", h: "400px" }}>
            <Card.Header
                isBlurred
                css={{
                    position: "absolute",
                    top: 0,
                    bgBlur: "#ffffff66",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    zIndex: 1,
                }}>
                <Col>
                    <Text h2 color="black">
                        {props.title}
                    </Text>
                </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src={props.img}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt="Card example background"
                />
            </Card.Body>
            <Card.Footer
                isBlurred
                css={{
                    position: "absolute",
                    bgBlur: "#ffffff66",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                }}
            >
                <Row>
                    <Col>
                        <Text color="#000" size={12}>
                            Author : {props.author}
                        </Text>
                        <Text color="#000" size={12}>
                            Published at : {props.date}
                        </Text>
                    </Col>
                    <Col>
                        <Row justify="flex-end">
                            <button onClick={() => {
                                setFavorite([{ url: props.url, title: props.title }, ...star]);
                                localStorage.setItem('favoritos', JSON.stringify(star));
                            }} className='my-auto mr-5 hover:cursor-pointer bg-white/30 hover:bg-white/50 p-2 rounded'>
                                Save
                            </button>
                            <a target='blank' href={props.url}>
                                <Button flat auto rounded color="primary">
                                    <Text
                                        css={{ color: "inherit" }}
                                        size={12}
                                        weight="bold"
                                        transform="uppercase"
                                    >
                                        Go to news ..
                                    </Text>
                                </Button>
                            </a>
                        </Row>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
};
