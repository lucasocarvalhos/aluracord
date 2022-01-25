import appConfig from '../config.json';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';

function GlobalStyle() {
    return (
        <style global jsx>{`

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none
        }

        body {
            font-family: 'Roboto', 'Open Sans'
        }

        html, body, #_next {
            min-height: 100vh;
            display: flex;
            flex: 1
        }

        #_next{
            flex:1
        }

        #_next > * {
            flex: 1
        }
        
        `}</style>
    )
}


function Title(props) {
    const Tag = props.tag || 'h1';
    return (
        <>

            <Tag>{props.children}</Tag>

            <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.primary["200"]};
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
    const username = 'lucasocarvalhos';

    return (
        <>
            <GlobalStyle />
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary["400"],
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
                        backgroundColor: appConfig.theme.colors.primary["400"],
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Title tag="h2">Boas vindas de volta!</Title>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.primary["100"] }}>
                            {appConfig.name}
                        </Text>

                        <TextField
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.primary["400"],
                                    mainColor: appConfig.theme.colors.primary["300"],
                                    mainColorHighlight: appConfig.theme.colors.primary["200"],
                                    backgroundColor: appConfig.theme.colors.primary["200"],
                                },
                            }}
                        />
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.primary["300"],
                                mainColor: appConfig.theme.colors.primary["100"],
                                mainColorLight: appConfig.theme.colors.primary["050"],
                                mainColorStrong: appConfig.theme.colors.primary["200"],
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
                            backgroundColor: appConfig.theme.colors.primary["300"],
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
                                color: appConfig.theme.colors.primary["400"],
                                backgroundColor: appConfig.theme.colors.primary["050"],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            {username}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}