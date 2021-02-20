import "./styles.css";

import { LinkButton } from "../../components/Button";
import routes from "../../constants/routes";

export default function Home() {
  return (
    <div id="home-page">
      <aside className="side-left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="480"
          height="349.997"
          viewBox="0 0 480 349.997"
          className="undraw-icon"
        >
          <rect
            id="Retângulo_2"
            data-name="Retângulo 2"
            width="352.871"
            height="225.994"
            transform="translate(0.151 0.2)"
            fill="#e6e6e6"
          />
          <rect
            id="Retângulo_3"
            data-name="Retângulo 3"
            width="332.69"
            height="184.279"
            transform="translate(10.241 28.545)"
            fill="#fff"
          />
          <rect
            id="Retângulo_4"
            data-name="Retângulo 4"
            width="352.871"
            height="14.991"
          />
          <circle
            id="Elipse_1"
            data-name="Elipse 1"
            cx="2.779"
            cy="2.779"
            r="2.779"
            transform="translate(8.362 4.886)"
            fill="#fff"
          />
          <circle
            id="Elipse_2"
            data-name="Elipse 2"
            cx="2.779"
            cy="2.779"
            r="2.779"
            transform="translate(18.908 4.886)"
            fill="#fff"
          />
          <circle
            id="Elipse_3"
            data-name="Elipse 3"
            cx="2.779"
            cy="2.779"
            r="2.779"
            transform="translate(29.455 4.886)"
            fill="#fff"
          />
          <rect
            id="Retângulo_5"
            data-name="Retângulo 5"
            width="65.069"
            height="70.594"
            transform="translate(51.175 43.702)"
            fill="#e6e6e6"
          />
          <rect
            id="Retângulo_6"
            data-name="Retângulo 6"
            width="65.069"
            height="70.594"
            transform="translate(144.051 43.702)"
            fill="#e6e6e6"
          />
          <rect
            id="Retângulo_7"
            data-name="Retângulo 7"
            width="65.069"
            height="70.594"
            transform="translate(236.927 43.702)"
            fill="#e6e6e6"
          />
          <rect
            id="Retângulo_8"
            data-name="Retângulo 8"
            width="65.069"
            height="70.594"
            transform="translate(51.175 127.075)"
            fill="#e6e6e6"
          />
          <rect
            id="Retângulo_9"
            data-name="Retângulo 9"
            width="65.069"
            height="70.594"
            transform="translate(144.051 127.075)"
            fill="#e6e6e6"
          />
          <rect
            id="Retângulo_10"
            data-name="Retângulo 10"
            width="65.069"
            height="70.594"
            transform="translate(236.927 127.075)"
            fill="#e6e6e6"
          />
          <path
            id="Caminho_1"
            data-name="Caminho 1"
            d="M447.932,391.7l11.889-4.7,1.382,23.5s2.488,7.189,1.659,9.953c0,0,.553,4.7-.829,4.977s-5.253.829-5.53.553-.276-1.106-.276-1.106-2.765,1.935-3.041,4.147c0,0-11.612,3.594-11.889.276s5.806-6.083,5.806-6.083l4.7-7.189Z"
            transform="translate(-288.154 -246.483)"
            fill="#fff"
          />
          <path
            id="Caminho_2"
            data-name="Caminho 2"
            d="M493.9,391.7,505.79,387l1.382,23.5s2.488,7.189,1.659,9.953c0,0,.553,4.7-.829,4.977s-5.253.829-5.53.553-.276-1.106-.276-1.106-2.765,1.935-3.041,4.147c0,0-11.612,3.594-11.889.276s5.806-6.083,5.806-6.083l4.7-7.189Z"
            transform="translate(-308.963 -246.483)"
            fill="#fff"
          />
          <path
            id="Caminho_3"
            data-name="Caminho 3"
            d="M481.97,228.992s-2.532,7.073.4,10.263l-2.445,8.4s8.688,26.064,6.206,29.705c0,0-9.267,4.634-27.8-1.655l7.53-29.209-1.076-12.329,1.489-5.792,3.31-.331s-1.986,7.447,1.655,8.605,7.193-8.42,7.193-8.42Z"
            transform="translate(-295.869 -174.528)"
            fill="#3f3d56"
          />
          <path
            id="Caminho_4"
            data-name="Caminho 4"
            d="M287.921,274.292l3.195,1.307,15.247-20.039,4.792,23.524,3.195-.581c2.049-20.281,3.72-40.967,1.67-50.751l-11.835-.508-5.373,17.135L296.2,256Z"
            transform="translate(-218.728 -174.164)"
            fill="#fff"
          />
          <path
            id="Caminho_5"
            data-name="Caminho 5"
            d="M638.742,227.875s-4.36,6.061-4.147,8.507,2.978,42.322,2.978,42.322l6.487.319-1.914-28.711,1.6-7.763,3.935,36.155,7.975.213-7.125-46.895-1.382-4.147Z"
            transform="translate(-375.657 -174.45)"
            fill="#fff"
          />
          <path
            id="Caminho_6"
            data-name="Caminho 6"
            d="M653.479,401.778a9,9,0,0,0-5.059-2.546c.057-.174-5.812-1.386-5.91-1.136l-2.212-1.762-6.795,3.529-3.819-2.6-1.774.63c.072-.313-5.507.653-5.507.653-1.066.038-2.427.105-3.951.222-5.336.41-5.746,14.229-5.746,14.229a21.813,21.813,0,0,1,7.724-1.617l1.442,16.53a76.467,76.467,0,0,1,23.259,1.915l3.781-12.994,8.806-3.424S656.215,405.062,653.479,401.778Z"
            transform="translate(-365.752 -250.708)"
            fill="#3f3d56"
          />
          <path
            id="Caminho_7"
            data-name="Caminho 7"
            d="M314.156,388.191a7.419,7.419,0,0,0-4.168-2.1,22.407,22.407,0,0,0-4.869-.936l-1.823-1.452-5.6,2.908-3.147-2.142-1.462.519c.06-.258-4.537.538-4.537.538-.878.032-2,.087-3.255.183-4.4.338-4.735,11.724-4.735,11.724a17.971,17.971,0,0,1,6.365-1.333l1.188,33.34a63.006,63.006,0,0,1,19.164,1.578l3.116-30.425,7.256-2.822S316.41,390.9,314.156,388.191Z"
            transform="translate(-215.397 -244.991)"
            fill="#fff"
          />
          <path
            id="Caminho_8"
            data-name="Caminho 8"
            d="M543.772,569.591,499.756,578.6l-1-.1-38.681-3.9v-49.02l47.352-8.006,34.349,4.006.013.217v.1Z"
            transform="translate(-208.265 -234.293)"
            fill="#e6e6e6"
          />
          <path
            id="Caminho_9"
            data-name="Caminho 9"
            d="M575.765,573.084l-44.017,9.009-1-.1V531.738l43.033-6.453Z"
            transform="translate(-240.257 -237.786)"
            opacity="0.1"
          />
          <path
            id="Caminho_10"
            data-name="Caminho 10"
            d="M541.785,521.894l-.013.013-43.02,6.339-38.681-2.671,47.352-8.006,34.349,4.006.013.217Z"
            transform="translate(-208.265 -234.293)"
            opacity="0.05"
          />
          <rect
            id="Retângulo_11"
            data-name="Retângulo 11"
            width="26.819"
            height="12.588"
            transform="matrix(0.998, 0.065, -0.065, 0.998, 257.131, 308.392)"
            fill="#fff"
          />
          <rect
            id="Retângulo_12"
            data-name="Retângulo 12"
            width="14.23"
            height="4.379"
            transform="matrix(0.998, 0.065, -0.065, 0.998, 263.145, 312.898)"
          />
          <path
            id="Caminho_11"
            data-name="Caminho 11"
            d="M652.772,569.591,608.756,578.6l-1-.1-38.681-3.9v-49.02l47.352-8.006,34.349,4.006.013.217v.1Z"
            transform="translate(-257.607 -234.293)"
          />
          <path
            id="Caminho_12"
            data-name="Caminho 12"
            d="M684.765,573.084l-44.017,9.009-1-.1V531.738l43.033-6.453Z"
            transform="translate(-289.599 -237.786)"
            opacity="0.1"
          />
          <path
            id="Caminho_13"
            data-name="Caminho 13"
            d="M650.785,521.894l-.013.013-43.02,6.339-38.681-2.671,47.352-8.006,34.349,4.006.013.217Z"
            transform="translate(-257.607 -234.293)"
            opacity="0.05"
          />
          <rect
            id="Retângulo_13"
            data-name="Retângulo 13"
            width="26.819"
            height="12.588"
            transform="matrix(0.998, 0.065, -0.065, 0.998, 316.789, 308.392)"
            fill="#fff"
          />
          <rect
            id="Retângulo_14"
            data-name="Retângulo 14"
            width="14.23"
            height="4.379"
            transform="matrix(0.998, 0.065, -0.065, 0.998, 322.803, 312.898)"
          />
          <path
            id="Caminho_14"
            data-name="Caminho 14"
            d="M933.651,295.884s7.766,20.063-6.472,20.063,22,20.063,36.242,8.413,5.825-12.3,5.825-12.3-18.768,1.942-18.121-14.885Z"
            transform="translate(-506.634 -205.236)"
            fill="#ffb8b8"
          />
          <circle
            id="Elipse_4"
            data-name="Elipse 4"
            cx="22.889"
            cy="22.889"
            r="22.889"
            transform="translate(414.245 50.909)"
            fill="#2f2e41"
          />
          <path
            id="Caminho_15"
            data-name="Caminho 15"
            d="M907.007,448.422l-24.593,63.424s-12.3,19.416-7.766,38.831,16.979,54.752,16.979,54.752,9.4,2.393,8.757-6.021.4-49.2-9.3-60.205l39.226-44.831L931.6,545.5s-2.589,23.3-1.942,33.654,1.942,27.829,1.942,27.829l7.766-1.294s10.477-47.668,9.182-63.2c0,0,24.046-75.471-.547-93.592Z"
            transform="translate(-483.874 -274.287)"
            fill="#2f2e41"
          />
          <path
            id="Caminho_16"
            data-name="Caminho 16"
            d="M905.852,729.434s-3.167-.806-3.531,2.1S895.3,747.351,902.249,748s9.359-5.859,10.524-10.433,1.606-4.836,2.578-5.712,3.287-5.677.383-6.042a6.428,6.428,0,0,1-4.393-3.221S910.425,730.6,905.852,729.434Z"
            transform="translate(-495.394 -398.397)"
            fill="#2f2e41"
          />
          <path
            id="Caminho_17"
            data-name="Caminho 17"
            d="M984.042,730.672s-5.873-.839-5.453,1.258-.839,10.906,0,11.745,2.517,2.517,2.517,3.775.42,5.453,7.551,4.195,5.453-7.55,5.034-8.389-5.453-5.034-5.034-7.55S986.559,728.995,984.042,730.672Z"
            transform="translate(-531.246 -401.882)"
            fill="#2f2e41"
          />
          <circle
            id="Elipse_5"
            data-name="Elipse 5"
            cx="15.854"
            cy="15.854"
            r="15.854"
            transform="translate(421.562 67.49)"
            fill="#ffb8b8"
          />
          <path
            id="Caminho_18"
            data-name="Caminho 18"
            d="M951.76,322.012s5.53,10.94-11.138,11.251c-5.124.1-11.218-3.639-13.733-8.1-1.482-2.63-1.856,1-4.253.736-4.538-.5-9.386,1.378-13.724,3.685a2.737,2.737,0,0,0-1.337,3.211c3.29,10.916,12.685,63.424,14.136,66.283,3.7,7.3,43.786-4.926,43.786-4.926.549-19.864-6.661-47.656,6.021-67.868a24.156,24.156,0,0,0-19.757-4.268Z"
            transform="translate(-499.18 -216.803)"
            fill="#575a89"
          />
          <path
            id="Caminho_19"
            data-name="Caminho 19"
            d="M800.665,124.97l-11.616-6.084-16.04,2.489-3.318,14.658,8.261-.318,2.307-5.385v5.3l3.812-.147,2.212-8.573,1.383,9.127,13.551-.277Z"
            transform="translate(-348.423 -53.817)"
            fill="#2f2e41"
          />
          <circle
            id="Elipse_6"
            data-name="Elipse 6"
            cx="9.236"
            cy="9.236"
            r="9.236"
            transform="translate(429.102 38.461)"
            fill="#2f2e41"
          />
          <path
            id="Caminho_20"
            data-name="Caminho 20"
            d="M938.786,204.634a9.238,9.238,0,0,1,7.83-9.129,9.236,9.236,0,1,0,0,18.259A9.238,9.238,0,0,1,938.786,204.634Z"
            transform="translate(-512.092 -159.748)"
            fill="#2f2e41"
          />
          <path
            id="Caminho_21"
            data-name="Caminho 21"
            d="M807.772,440.591,763.756,449.6l-1-.1-38.681-3.9v-49.02l47.352-8.006,34.349,4.006.013.217v.1Z"
            transform="translate(-327.772 -175.897)"
            fill="#e6e6e6"
          />
          <path
            id="Caminho_22"
            data-name="Caminho 22"
            d="M839.765,444.084l-44.017,9.009-1-.1V402.738l43.033-6.453Z"
            transform="translate(-359.765 -179.39)"
            opacity="0.1"
          />
          <path
            id="Caminho_23"
            data-name="Caminho 23"
            d="M805.785,392.894l-.013.013-43.02,6.339-38.681-2.671,47.352-8.006,34.349,4.006.013.217Z"
            transform="translate(-327.772 -175.897)"
            opacity="0.05"
          />
          <rect
            id="Retângulo_15"
            data-name="Retângulo 15"
            width="26.819"
            height="12.588"
            transform="matrix(0.998, 0.065, -0.065, 0.998, 401.625, 237.788)"
            fill="#fff"
          />
          <rect
            id="Retângulo_16"
            data-name="Retângulo 16"
            width="14.23"
            height="4.379"
            transform="matrix(0.998, 0.065, -0.065, 0.998, 407.638, 242.294)"
          />
          <path
            d="M904.23,510.457s-16.18,12.944-9.061,17.474S910.7,510.457,910.7,510.457Z"
            transform="translate(-492.798 -302.369)"
            fill="#ffb8b8"
          />
          <path
            d="M906.221,335.2c-.838-.945-11.421,4.453-9.852,11.494l.738,48.785s-3.883,40.126,5.825,40.126,8.562,1.349,9.857-1.887,1.642-30.65,1.642-30.65Z"
            transform="translate(-494.088 -222.984)"
            fill="#575a89"
          />
          <path
            d="M1005.95,502.457s8.413,22,15.533,17.474-9.061-17.474-9.061-17.474Z"
            transform="translate(-543.765 -298.748)"
            fill="#ffb8b8"
          />
          <path
            d="M1004.973,395.613s-4.031,26.867-2.737,30.1.149,1.887,9.857,1.887,5.825-40.126,5.825-40.126l.738-48.785c1.569-7.041-9.014-12.438-9.852-11.494l-9.3,31.745Z"
            transform="translate(-540.846 -219.363)"
            fill="#575a89"
          />
        </svg>
        <span className="info-text">Faça suas próximas compras agora!</span>
      </aside>
      <main className="content">
        <h2>Aproveite o cupom de 30%</h2>
        <h1>Carnaval30</h1>
        <h2>e fique em casa!</h2>
        <LinkButton href={routes.PRODUCTS}>Quero comprar agora</LinkButton>
      </main>
    </div>
  );
}
