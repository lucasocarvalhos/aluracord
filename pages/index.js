import appConfig from '../config.json';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router';
// import axios from 'axios'

// function getData(username) {
//     axios.get(`https://api.github.com/users/${username}`).then(response => {
//         const bio = response.data.bio
//         const location = response.data.location
//         console.log(bio, location)
//     })
// }

function Title(props) {
    const Tag = props.tag || 'h1';
    return (
        <>

            <Tag>{props.children}</Tag>

            <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.primary["050"]};
                    font-size: 24px;
                    font-weight: 600
                }
            `}</style>
        </>
    )
}


// Componente REACT
// function HomePage() {
//     // JSX
//     return (
//     <div> 
//         <GlobalStyle/>
//         <Title tag="h1">Boas vindas de volta!</Title>
//         <h2>DiscoZap</h2>

//     </div>)
//   }

//   export default HomePage

export default function PaginaInicial() {
    const [username, setUsername] = React.useState('lucasocarvalhos')
    const roteamento = useRouter()
    
    const [location, setLocation] = React.useState(null)

    fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(res => setLocation(res.location))

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary["500"],
                    backgroundImage: 'url(https://c4.wallpaperflare.com/wallpaper/185/1022/422/code-computer-programming-syntax-wallpaper-preview.jpg)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.primary["500"],
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        onSubmit= {function (infosDoEvento) {
                            infosDoEvento.preventDefault()
                            roteamento.push('/chat')
                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Title tag="h2">Boas vindas de volta!</Title>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.primary["050"] }}>
                            {appConfig.name}
                        </Text>

                        <TextField
                            //value={username}
                            onChange={function handler(event) {
                                // Onde ta o valor?
                                const valor = event.target.value;
                                // Trocar o valor da variavel atraves do React
                                if (valor.length > 2) {setUsername(valor)}
                                if (valor.length <= 2) {setUsername(null)}
                            }}
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.primary["050"],
                                    mainColor: appConfig.theme.colors.primary["300"],
                                    mainColorHighlight: appConfig.theme.colors.primary["200"],
                                    backgroundColor: appConfig.theme.colors.primary["600"],
                                },
                            }}
                        />
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.primary["050"],
                                mainColor: appConfig.theme.colors.primary["400"],
                                mainColorLight: appConfig.theme.colors.primary["050"],
                                mainColorStrong: appConfig.theme.colors.primary["300"],
                            }}
                        />
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: appConfig.theme.colors.primary["400"],
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.primary["050"],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.primary["500"],
                                backgroundColor: appConfig.theme.colors.primary["050"],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            <h4>{username}</h4>
                        </Text>

                        <Text
                            variant="body4"
                            styleSheet={{
                                fontSize: '12px',
                                color: appConfig.theme.colors.primary["500"],
                                backgroundColor: appConfig.theme.colors.primary["050"],
                                padding: '3px 10px',
                                marginTop: '20px',
                                borderRadius: '1000px'
                            }}
                        >
                            {location}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}