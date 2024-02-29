import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/home.module.scss";
import logotipo from "../resources/logotipo.png";
import logo from "../resources/log4.png";
import Fundo from "../resources/recruiter.jpg";
import Recrutamento from "../resources/recrutamento e seleção.jpg";
import Comportamental from "../resources/comportamental.jpg";
import Psicologico from "../resources/psicologicos.jpg";
import Coaching from "../resources/coaching.jpeg";
import Atd from "../resources/pngwing.com.png";
import {
  FaWhatsapp,
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaHome,
} from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>GNT - Recruiter and Selection</title>
      </Head>
      <main className={styles.Container}>
        <section className={styles.pagina1}>
          <div className={styles.logoMenu}>
            <Image
              className={styles.gntLogo}
              src={logotipo}
              width={700}
              height={300}
              alt="logotipo gnt"
              quality={75}
            />

            <h1 className={styles.title}>Recruiter and Selection</h1>
            <nav>
              <ul>
                <li>Home</li>
                <li>Serviços</li>
                <li>Contato</li>
                <li>Blog</li>
                <li>About Us</li>
              </ul>
            </nav>
          </div>

          <div className={styles.fundo}>
            <Image
              className={styles.imagem}
              src={Fundo}
              style={{ width: "100%", height: "100vh" }}
              alt="fundo pagina 1"
              quality={100}
            />
          </div>

          <div className={styles.textinit}>
            <p>
              Bem-vindo à GNT, sua parceira em recrutamento e seleção.
              Conectamos talentos excepcionais a oportunidades transformadoras.
              Somos facilitadores de carreira e construtores de equipes. Nosso
              foco é nas pessoas e acreditamos no poder dos colaboradores para
              impulsionar o sucesso empresarial. Encontramos os talentos certos
              para cada posição, desde cargos iniciais até liderança executiva.
              Junte-se a nós na jornada de crescimento e realização. Na GNT,
              transformamos carreiras e futuros.
            </p>
          </div>
        </section>

        <section className={styles.pagina2}>
          <div className={styles.boxServices}>
            <h1 className={styles.title}> Serviços</h1>
            <div className={styles.box}>
              <div className={styles.services}>
                <h2>Recrutamento e Seleção</h2>
                <p>
                  Avaliação de candidatos mais <br /> adequados as vagas
                  solicitadas
                </p>
                <div className={styles.spaceImg}>
                  <Image
                    className={styles.boxImage}
                    src={Recrutamento}
                    alt={"imagem da box"}
                    quality={100}
                  />
                </div>
              </div>

              <div className={styles.services}>
                <h2>Testes Comportamentais</h2>
                <p>
                  Avaliação de candidatos mais <br /> adequados as vagas
                  solicitadas
                </p>
                <div className={styles.spaceImg}>
                  <Image
                    className={styles.boxImage}
                    src={Comportamental}
                    alt={"imagem da box"}
                    quality={100}
                  />
                </div>
              </div>
              <div className={styles.services}>
                <h2>Analise Psicológica</h2>
                <p>
                  Avaliação de candidatos mais <br /> adequados as vagas
                  solicitadas
                </p>
                <div className={styles.spaceImg}>
                  <div className="spaceImg"></div>
                  <Image
                    className={styles.boxImage}
                    src={Psicologico}
                    alt={"imagem da box"}
                    quality={100}
                  />
                </div>
              </div>
              <div className={styles.services}>
                <h2>Mentoria e Coaching</h2>
                <p>
                  Avaliação de candidatos mais <br /> adequados as vagas
                  solicitadas
                </p>
                <div className={styles.spaceImg}>
                  <Image
                    className={styles.boxImage}
                    src={Coaching}
                    alt={"imagem da box"}
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.pagina3}>
          <h1 className={styles.title}>Contato</h1>
          <div className={styles.formbox}>
            <h2> Fale Conosco</h2>
            <p>
              Ficou com alguma duvida ou deseja mais informações? Preencha o
              formulario abaixo e um de nossos especialistas em breve entrará em
              contato com você
            </p>
            <form className={styles.formulario}>
              <input type="text" placeholder="Digite seu nome" required />
              <input type="email" placeholder="Digite seu e-mail" required />
              <textarea
                id="message"
                name="message"
                rows={4}
                cols={50}
                placeholder="Digite sua mensagem aqui..."
                maxLength={200}
                required
              />

              <input type="submit" value="Enviar" />
            </form>
          </div>
        </section>

        <footer className={styles.rodape}>
          <div className={styles.contateme}>
            <a href="https://www.dikma.com.br">
              {" "}
              <FaGlobe size={20} color="#245555" className={styles.icon} />
              www.GNT.com.br
            </a>

            <p>
              {" "}
              <FaEnvelope size={15} color="#245555" className={styles.icon} />
              gntconsultoriarh@gnt.com.br
            </p>
            <p>
              {" "}
              <FaPhone size={15} color="#245555" className={styles.icon} />
              (27)3335-5541
            </p>
            <p>
              {" "}
              <FaHome size={15} color="#245555" className={styles.icon} />
              (27)9999- 9999
            </p>
          </div>

          <nav className={styles.navFooter}>
            <ul>
              <li>Sobre nós</li>
              <li>Produtos</li>
              <li> Serviços</li>
              <li> Blog</li>
              <li> FAQ</li>
              <li> Política de Privacidade e Termos de Uso</li>
            </ul>
          </nav>
          <div className={styles.fale}>
          
              <div className={styles.intern}>
                <p>Fale agora com um especialista </p>
                <Image
                  src={Atd}
                  alt={"Atendimento"}
                  width={25}
                  height={25}
                  className={styles.atendimento}
                />
              </div>
          
            <div className={styles.sociais}>
              <FaWhatsapp size={40} color="#24cc63"  className={styles.soc}/>
              <FaFacebookSquare size={40} color="#3b5998"  className={styles.soc} />
              <FaTwitter size={40} color="#1da1f2"  className={styles.soc} />
              <FaInstagram size={40} color="#c13584"  className={styles.soc} />
              <FiLinkedin size={40} color="#0077b5"  className={styles.soc} />
            </div>
          </div>

          <div className={styles.description}>
            <Image src={logo} alt='logotipo gnt no rodapé' className={styles.footerlogo}/>
            <h1>GNT- GENTE DE VALOR</h1>
          </div>
            <p className={styles.descph}>Apaixonados em Capacitar Empresas e Pessoas</p>

          <div className={styles.copy}>Copyright&copy; GNT - Recrutamento e Seleção</div>
        </footer>
      </main>
    </>
  );
}
