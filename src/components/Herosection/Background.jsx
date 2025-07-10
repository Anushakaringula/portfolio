import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Background = () => {
  const particlesInit = async (main) => {
    await loadFull(main); // Load tsparticles engine
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: false,
        },
        background: {
          color: {
            value: "#0a0e30"
          }
        },
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#0a0e30"
          },
          links: {
            enable: true,
            color: "#0a0e30",
            distance: 150,
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1
          },
          size: {
            value: 3
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            }
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.5
              }
            }
          }
        }
      }}
    />
  );
};

export default Background;
