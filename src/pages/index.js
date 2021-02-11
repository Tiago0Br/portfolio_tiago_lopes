import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import Resume from "../components/sections/Resume";
import Experience from "../components/sections/Experience"
import Education from "../components/sections/Education"
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      
      <Resume
        firstName={config.firstName}
        lastName={config.lastName}
        adress={config.address}
        phone={config.phone}
        email={config.email}
        socialLinks={config.socialLinks}>
          Estudante de Ciência da Computação e Estagiário em Teste de Software, gosto de programação em 
          geral e de automação de testes, trabalho com a linguagem Ruby e os frameworks Capyabara, Cucumber 
          e Rspec.
      </Resume>
      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experiência</h2>

          <Experience 
            profession="Testador de Software"
            company="2SOW Inovação e Tecnologia"
            description="Planejamento e execução de Testes manuais, criação de scripts de testes
              automatizados na linguagem de programação Ruby, documentação de testes e
              criação de métricas de qualidade de software."
            period="Fevereiro 2021 - Presente" 
          />

          <Experience 
            profession="Estagiário em Testes de Software"
            company="2SOW Inovação e Tecnologia"
            description="Auxilio no planejamento e execução de testes manuais nos sistemas da empresa,
            com o intuito de prevenir erros e falhar e impedir que cheguem até o cliente,
            garantindo a qualidade do sistema."
            period="Julho 2020 - Janeiro 2021" 
          />
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Educação</h2>

          <Education 
            college="Faculdade de Americana - FAM"
            type="Bacharelado"
            course="Ciência da Computação"
            period="Fevereiro 2020 - Presente"
          />

        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Linguagens de Programação &amp; ferramentas
          </div>

          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <abbr title="HTML5">
                <i className="fab fa-html5"></i>
              </abbr>
            </li>
            <li className="list-inline-item">
              <abbr title="CSS3">
                <i className="fab fa-css3-alt"></i>
              </abbr>
            </li>
            <li className="list-inline-item">
              <abbr title="Javascript">
                <i className="fab fa-js-square"></i>
              </abbr>
            </li>
            <li className="list-inline-item">
              <abbr title="ReactJS">
                <i className="fab fa-react"></i>
              </abbr>
            </li>
            <li className="list-inline-item">
              <abbr title="NodeJS">
                <i className="fab fa-node-js"></i>
              </abbr>
            </li>
            <li className="list-inline-item">
              <abbr title="NPM">
                <i className="fab fa-npm"></i>
              </abbr>
            </li>
          </ul>

          <div className="subheading mb-3">Conhecimento</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Automação de Testes com Cucumber, Capybara e Rspec
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Testes Manuais
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Conhecimento básico em HTML, CSS e Javascript
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Conhecimento intermediário em programação Ruby
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interesses</h2>
          <p>
            Gosto de programação, automação de testes, Desenvolvimento Web e tecnologias no geral.
          </p>
          <p className="mb-0">
            Quando não estou estudando ou trabalhando, gosto de jogar no celular games retros, utilzando
            emuladores, sou fã de Super Mário, The Legend of Zelda, Donkey Kong, entre outros.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Projetos</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a href="https://github.com/Tiago0Br/little-snake-game" rel="noreferrer"
              target="_blank">Jogo da Cobrinha</a> -
               Minha versão (bem mais simples) do famoso jogo da cobrinha
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a href="https://github.com/Tiago0Br/netflix-project" rel="noreferrer"
              target="_blank">Clone da interface
              da Netflix</a> -
               Tentativa de replicar a tela inicial da Netflix
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a href="https://github.com/Tiago0Br/Calculadora_de_Logaritmo" rel="noreferrer"
              target="_blank">Calculadora de Logaritmo</a> -
               Calculadora simples que resolve o cálculo do logaritmo
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              <a href="https://github.com/Tiago0Br/instagram-design" rel="noreferrer"
              target="_blank">Página inicial do Instagram</a> -
               Clone da interface da tela inicial do Instagram
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
