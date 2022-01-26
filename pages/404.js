import React from 'react';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';

export default function PaginaNotFound() {
    return (
        <Box
            styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center',
                backgroundColor: "#F1E8B8"
            }}
        >
        <>
            <h2 styleSheet={{
                fontFamily:'Open Sans',
                }}>Ainda não há nenhum sinal de civilização por aqui.</h2>

            <Image
                styleSheet={{
                    borderColor: "black",
                    marginBottom: '16px',
                    width: '250px'
                }}
                src = {"https://cdn-icons.flaticon.com/png/512/1891/premium/1891886.png?token=exp=1643216743~hmac=dfe7aaf694642d2fb9ca1239d6ed8111"}
            />
        </>
        </Box>
    )
}