const profissoes = `
    <h3><strong>Profissões e Fama</strong></h3>
    <p>
        As profissões são divididas em três categorias principais: <strong>Artesãs</strong>, <strong>Lutadoras</strong> e <strong>Livres</strong>. Diferente de sistemas tradicionais, o progresso profissional ocorre automaticamente: o jogador evolui sua proficiência ao desempenhar repetidamente tarefas relacionadas à profissão escolhida. Além disso, as profissões funcionam como meios primários para acumular ganhos financeiros dentro do jogo, enquanto apostas oferecem outra forma estratégica de enriquecer. Jogadores podem apostar em si próprios em partidas PvP ou apoiar campeões em torneios, criando uma dinâmica de risco e recompensa que torna o sistema ainda mais envolvente.
    </p>

    <h4><strong>1. Artesãs</strong></h4>
    <ul>
        <li>
            <strong>Artífice</strong>:
            <ul>
                <li>Focado na criação de armas, armaduras e ferramentas decorativas ou utilitárias de madeira e metal.</li>
                <li>Evolui ao fabricar itens ou refinar materiais.</li>
                <li>Fundamental para abastecer lutadores e outros profissionais, podendo fabricar desde gazuas para ladrões até utensílios para alquimistas.</li>
            </ul>
        </li>
        <li>
            <strong>Alquimista</strong>:
            <ul>
                <li>Especialista em fabricar poções, venenos e alimentos especiais.</li>
                <li>Evolui ao combinar ingredientes raros para criar produtos valiosos e úteis no combate e nas missões.</li>
                <li>Abastece jogadores com recursos essenciais para exploração e batalhas.</li>
            </ul>
        </li>
    </ul>

    <h4><strong>2. Lutadoras</strong></h4>
    <ul>
        <li>
            <strong>Caçador</strong>:
            <ul>
                <li>Especialista em rastrear e abater criaturas.</li>
                <li>Evolui ao capturar e extrair recursos valiosos de animais e monstros.</li>
            </ul>
        </li>
        <li>
            <strong>Mercenário</strong>:
            <ul>
                <li>Protetor ou executor contratado.</li>
                <li>Evolui ao completar contratos de defesa ou eliminação de alvos.</li>
            </ul>
        </li>
    </ul>

    <h4><strong>3. Livres</strong></h4>
    <ul>
        <li>
            <strong>Pesquisador</strong>:
            <ul>
                <li>Descobre e documenta novas áreas, conhecimentos e criaturas.</li>
                <li>Evolui ao compartilhar informações únicas com outros jogadores.</li>
            </ul>
        </li>
        <li>
            <strong>Ladrão/Assassino</strong>:
            <ul>
                <li>Ganha a vida roubando ou assassinando em missões muitas vezes furtivas.</li>
                <li>Evolui ao completar roubos ou extermínios bem-sucedidos sem ser capturado.</li>
            </ul>
        </li>
    </ul>

    <h4><strong>Pontos de fama</strong></h4>
    <p>
        Devido à existência de contratos e profissões, dentro do jogo será instalado um sistema de fama, sendo ela positiva ou não. Vamos ver um exemplo:
    </p>
    <ul>
        <li>
            <strong>Mercenários</strong> ganham pontos de fama positiva por serem leais aos contratos e sempre completar suas tarefas. Se um mercenário não finaliza seus contratos, pode adquirir pontos negativos de fama, dificultando possíveis contratações futuras.
        </li>
        <li>
            <strong>Ladrões</strong>, por sua vez, possuem mais possibilidade de terem fama negativa, provando seus feitos e sendo respeitados pelos demais ladrões.
        </li>
    </ul>

` ;

export default profissoes;