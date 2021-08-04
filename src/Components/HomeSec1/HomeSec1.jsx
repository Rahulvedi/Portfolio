import React from 'react'

import { SectionBox,Heading,Cards,Card,CardImg,Text,Title} from './HomeSec1ElementsStyle'
import Resposive from '../../Images/Responsive.svg'
import Android from '../../Images/AndroidApp.svg'
import designUi from '../../Images/Design.svg'
import StartUp from '../../Images/StartUps.svg'
const HomeSec1 = ({Imgpos,ImgSrc}) => {
    return (
        <SectionBox>
            <Heading>Our Services</Heading>
            <Cards>
                <Card>
                    <CardImg src={Resposive}></CardImg>
                    <Title>Resposive</Title>
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem iste blanditiis iusto dicta quam cupiditate, culpa ratione expedita esse necessitatibus saepe nulla doloribus aliquam, praesentium ullam illum nihil accusantium</Text>
                </Card>
                <Card>
                    <CardImg src={Android}></CardImg>
                    <Title>Android App</Title>
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem iste blanditiis iusto dicta quam cupiditate, culpa ratione expedita esse necessitatibus saepe nulla doloribus aliquam, praesentium ullam illum nihil accusantium</Text>
                </Card>
                <Card>
                    <CardImg src={designUi}></CardImg>
                    <Title>UX and UI</Title>
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem iste blanditiis iusto dicta quam cupiditate, culpa ratione expedita esse necessitatibus saepe nulla doloribus aliquam, praesentium ullam illum nihil accusantium</Text>
                </Card>
                <Card>
                    <CardImg src={StartUp}></CardImg>
                    <Title>StartUps</Title>
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem iste blanditiis iusto dicta quam cupiditate, culpa ratione expedita esse necessitatibus saepe nulla doloribus aliquam, praesentium ullam illum nihil accusantium</Text>
                </Card>
            </Cards>
        </SectionBox>
    )
}
export default HomeSec1