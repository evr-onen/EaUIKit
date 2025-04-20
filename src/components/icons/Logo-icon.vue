<template>
  <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <!-- Main background -->
    <rect x="0" y="0" width="200" height="200" fill="#ffffff"/>

    <!-- Main circle -->
    <circle cx="100" cy="100" r="80"
            fill="none"
            stroke="#3498db"
            stroke-width="2"/>

    <!-- EA Design Kit text -->
    <g transform="translate(100, 100)">
        <!-- Abstract EA Shape -->
        <g transform="translate(-40, -35)">
            <!-- E shape -->
            <path d="M-5 -20
                     C15 -20, 25 -20, 35 -20
                     L35 -15
                     L5 -15
                     L5 0
                     C15 0, 25 0, 35 0
                     L35 5
                     L5 5
                     L5 15
                     C15 15, 25 15, 35 15
                     L35 20
                     L-5 20
                     Z"
                  fill="#34495e"/>

            <!-- A shape -->
            <path d="M45 20
                     L65 -20
                     L85 20
                     L75 20
                     L70 10
                     L60 10
                     L55 20
                     Z
                     M62 0
                     L68 0
                     L65 -8
                     Z"
                  fill="#34495e"/>
        </g>

        <!-- DESIGN text -->
        <text x="0"
              y="25"
              font-family="Arial, sans-serif"
              font-size="20"
              text-anchor="middle"
              fill="#34495e"
              letter-spacing="4">
            DESIGN
        </text>

        <!-- KIT text -->
        <text x="0"
              y="50"
              font-family="Arial, sans-serif"
              font-size="20"
              text-anchor="middle"
              fill="#3498db"
              letter-spacing="4">
            KIT
        </text>
    </g>
</svg> 
</template>
