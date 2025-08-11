# 🎨 IoT Dashboard Frontend - Interface Moderna para Gerenciamento de Dispositivos IoT

## 📋 Sobre o Projeto

Este é um sistema frontend desenvolvido em **Angular 18** com **TypeScript** e **Angular Material** para interface completa de gerenciamento de dispositivos IoT. O projeto foi criado como parte de um desafio técnico para a **Meta Telecom**, demonstrando habilidades em desenvolvimento frontend moderno e criação de dashboards em tempo real.

### 🎯 Objetivo do Desafio
Desenvolver uma interface frontend completa para consumir APIs de dispositivos IoT, criando um dashboard profissional em tempo real com funcionalidades CRUD avançadas e visualizações intuitivas.

## ✨ Funcionalidades Principais

### 📱 **Interface CRUD Completa para Dispositivos IoT**
- ✅ **Listar** dispositivos com filtros avançados e busca em tempo real
- ✅ **Visualizar** detalhes completos de cada dispositivo
- ✅ **Criar** novos dispositivos com formulário validado
- ✅ **Editar** informações de dispositivos existentes
- ✅ **Excluir** dispositivos com confirmação de segurança
- ✅ **Filtros dinâmicos** por tipo, status e conectividade

### 📊 **Dashboard Interativo com Métricas em Tempo Real**
- 📈 **Cards de métricas**: Total, online, offline, manutenção, erros
- 📊 **Gráficos circulares**: Distribuição por status e tipos de dispositivos
- 🔄 **Auto-refresh**: Atualização automática a cada 30 segundos
- 🎨 **Cores únicas**: Paleta de cores distintas para cada categoria
- 🌐 **Status do sistema**: Indicador visual de saúde geral (Operacional/Crítico)
- 📱 **Design responsivo**: Funciona perfeitamente em desktop, tablet e mobile

### 🎨 **Experiência do Usuário Avançada**
- ⚡ **Performance otimizada** com lazy loading de componentes
- 🎯 **Navegação intuitiva** entre Dashboard e Dispositivos
- 💫 **Animações suaves** e transições profissionais
- 🔧 **Formulários inteligentes** com validação em tempo real
- 🚨 **Notificações** elegantes para feedback do usuário
- 🌙 **Interface moderna** com design Material Design

## 🛠️ Tecnologias Utilizadas

### **Frontend Core**
- 🅰️ **Angular 18** - Framework principal com standalone components
- 📘 **TypeScript 5.5** - Linguagem tipada para maior robustez
- 🎨 **Angular Material 18** - Componentes de interface elegantes
- 🔄 **RxJS 7.8** - Programação reativa para dados em tempo real

### **UI/UX & Design**
- 🎨 **Material Design** - Sistema de design do Google
- 📊 **Chart.js 4.5** - Gráficos interativos e responsivos
- 📈 **ng2-charts 6.0** - Integração Angular + Chart.js
- 🎯 **Bootstrap 5.3** - Sistema de grid responsivo
- 🔤 **Font Awesome 7.0** - Ícones profissionais

### **Ferramentas de Desenvolvimento**
- 🏗️ **Angular CLI 18** - Ferramentas de build e desenvolvimento
- 🔄 **Webpack** - Bundling e otimização de assets
- 📱 **PWA Ready** - Preparado para Progressive Web App
- 🌐 **SASS/SCSS** - Pré-processador CSS avançado

### **Internacionalização & Utilitários**
- 🌍 **ngx-translate** - Suporte multi-idioma (preparado)
- 📅 **date-fns 4.1** - Manipulação avançada de datas
- 🔧 **Angular CDK** - Kit de desenvolvimento de componentes

## 📁 Estrutura do Projeto

```
src/app/
├── 📁 components/                # Componentes reutilizáveis
│   ├── 📁 device-form/              # Formulário de dispositivos
│   │   ├── device-form.component.ts
│   │   ├── device-form.component.html
│   │   └── device-form.component.scss
│   ├── 📁 device-list/              # Lista de dispositivos
│   │   ├── device-list.component.ts
│   │   ├── device-list.component.html
│   │   └── device-list.component.scss
│   └── 📁 dashboard/                # Componentes do dashboard
│       ├── 📁 dashboard-card/           # Cards de métricas
│       ├── 📁 dashboard-chart/          # Gráficos interativos
│       └── 📁 dashboard-alerts/         # Sistema de alertas
├── 📁 pages/                     # Páginas principais
│   ├── 📁 dashboard-page/           # Página do dashboard
│   └── 📁 devices/                  # Página de dispositivos
├── 📁 services/                  # Serviços e lógica de negócio
│   ├── device.service.ts            # Comunicação com API de dispositivos
│   └── dashboard.service.ts         # Lógica do dashboard e métricas
├── 📁 models/                    # Interfaces e tipos TypeScript
│   ├── device.model.ts              # Modelo de dispositivos
│   └── dashboard.model.ts           # Modelos do dashboard
├── 📁 shared/                    # Componentes e utilitários compartilhados
└── 📁 assets/                    # Recursos estáticos (imagens, fontes)
```

## 🚀 Como Executar o Projeto

### **Pré-requisitos**
- 🟢 **Node.js 18+** instalado
- 📦 **npm 9+** ou **yarn** para gerenciamento de pacotes
- 🅰️ **Angular CLI 18** instalado globalmente
- 🌐 **Navegador moderno** (Chrome, Firefox, Safari, Edge)

### **1. Clone o Repositório**
```bash
git clone https://github.com/davidbs09/iot-dashboard-frontend.git
cd crud-Iot__frontend
```

### **2. Instale as Dependências**
```bash
# Usando npm
npm install

# Ou usando yarn
yarn install
```

### **3. Execute a Aplicação**
```bash
# Modo desenvolvimento
ng serve

# Ou npm script
npm start
```

### **4. Acesse a Aplicação**

#### 🌐 **Aplicação Principal**
```
http://localhost:4200
```
- 📊 **Dashboard**: Métricas e gráficos em tempo real
- 🔧 **Dispositivos**: Listagem e gerenciamento completo
- 📱 **Responsivo**: Interface adaptável para todos os dispositivos

#### 🏗️ **Build de Produção**
```bash
# Gerar build otimizado
ng build --configuration production

# Arquivos gerados em dist/
```

## 🎯 Funcionalidades Detalhadas

### **📊 Dashboard Inteligente**

#### **🏷️ Cards de Métricas**
- **Total de Dispositivos**: Contador geral com trending
- **Dispositivos Online**: Status em tempo real com percentual de uptime
- **Dispositivos Offline**: Alerta visual para dispositivos desconectados
- **Em Manutenção**: Dispositivos em estado de manutenção programada
- **Com Erro**: Dispositivos que requerem intervenção técnica
- **Status do Sistema**: Indicador geral (Operacional/Atenção/Crítico)

#### **📈 Gráficos Interativos**
```typescript
// Distribuição por Status
- 🟢 Ativo: Dispositivos funcionais
- 🔵 Manutenção: Em manutenção programada  
- 🔴 Erro: Com falhas detectadas
- ⚫ Inativo: Temporariamente desabilitados
- 🟣 Configurando: Em processo de setup
```

```typescript
// Distribuição por Tipo
- 🌡️ Sensores: Temperatura, umidade, pressão
- 📍 Rastreadores: GPS, localização
- 🔌 Atuadores: Válvulas, motores, relés
- 🌐 Gateways: Pontos de conexão de rede
- 📺 Monitores: Displays e interfaces
- 🎛️ Controladores: Unidades de controle
```

### **🔧 Gerenciamento de Dispositivos**

#### **📋 Lista Avançada**
- **Busca em tempo real** por nome, identificador ou localização
- **Filtros múltiplos** por tipo, status e conectividade
- **Ordenação** por qualquer coluna (nome, tipo, status, última comunicação)
- **Paginação inteligente** para grandes volumes de dados
- **Ações rápidas** (editar, excluir, detalhes) em cada linha

#### **📝 Formulários Inteligentes**
```typescript
// Campos do Formulário de Dispositivo
{
  deviceName: string;           // Nome identificador
  deviceIdentifier: string;     // ID único do hardware
  deviceType: DeviceType;       // Tipo (enum validado)
  description?: string;         // Descrição detalhada
  location?: string;           // Localização física
  latitude?: number;           // Coordenada GPS
  longitude?: number;          // Coordenada GPS
  isActive: boolean;           // Status de conectividade
  status: DeviceStatus;        // Estado operacional
}
```

#### **✅ Validações Robustas**
- **Nome**: Obrigatório, 3-100 caracteres
- **Identificador**: Único, formato alfanumérico
- **Tipo**: Seleção obrigatória de enum validado
- **Coordenadas**: Validação de formato GPS (-90 a 90, -180 a 180)
- **Feedback visual**: Mensagens de erro elegantes em tempo real

## 🎨 Design System e UX

### **🎯 Princípios de Design**
- **Mobile First**: Design responsivo com prioridade mobile
- **Material Design**: Seguindo guidelines do Google
- **Acessibilidade**: Suporte a leitores de tela e navegação por teclado
- **Performance**: Lazy loading e otimizações de rendering
- **Consistência**: Padrões visuais unificados em toda aplicação

### **🌈 Paleta de Cores**
```scss
// Cores Principais
$primary: #007bff;      // Azul principal (ações primárias)
$success: #28a745;      // Verde (dispositivos online/ativos)
$warning: #ffc107;      // Amarelo (atenção/manutenção)
$danger: #dc3545;       // Vermelho (erros/offline)
$info: #17a2b8;         // Azul info (informações)

// Cores Secundárias
$purple: #6f42c1;       // Roxo (configurando)
$orange: #fd7e14;       // Laranja (offline)
$teal: #20c997;         // Verde água (testing)
$pink: #e83e8c;         // Rosa (pending)
```

### **📱 Responsividade**
- **Desktop** (1200px+): Layout completo com sidebar e gráficos lado a lado
- **Tablet** (768px-1199px): Layout adaptado com componentes empilhados
- **Mobile** (< 768px): Interface otimizada para toque com navegação colapsável

## ⚡ Performance e Otimização

### **🚀 Estratégias Implementadas**
- **Lazy Loading**: Carregamento sob demanda de componentes
- **OnPush Strategy**: Otimização de change detection
- **Trackby Functions**: Performance otimizada em listas grandes
- **Debounced Search**: Busca otimizada com delay para reduzir requisições
- **Memoization**: Cache de cálculos pesados no dashboard

### **📊 Métricas de Build**
```bash
# Build de Produção Otimizado
Initial Bundle: 383.03 kB (97.29 kB gzipped)
Lazy Chunks:
  - devices-page: 508.28 kB (86.47 kB gzipped)
  - dashboard-page: 265.04 kB (74.61 kB gzipped)
```

## 🔄 Integração com Backend

### **🌐 API Communication**
```typescript
// DeviceService - Principais métodos
class DeviceService {
  getAllDevices(): Observable<Device[]>
  getDeviceById(id: number): Observable<Device>
  createDevice(device: DeviceCreate): Observable<Device>
  updateDevice(id: number, device: DeviceUpdate): Observable<Device>
  deleteDevice(id: number): Observable<void>
  getDevicesByType(type: string): Observable<Device[]>
  getDevicesByStatus(status: string): Observable<Device[]>
  getOnlineDevices(): Observable<Device[]>
  getOfflineDevices(): Observable<Device[]>
}
```

### **📊 Dashboard Real-time**
```typescript
// DashboardService - Métricas em tempo real
class DashboardService {
  getDashboardStats(): Observable<DashboardStats>
  getConnectivityStats(): Observable<ConnectivityStats>
  getTypeDistribution(): Observable<TypeDistribution[]>
  getStatusDistribution(): Observable<StatusDistribution[]>
  
  // Auto-refresh a cada 30 segundos
  autoRefresh: boolean = true;
  refreshInterval: number = 30000;
}
```

## 🧪 Exemplos de Uso

### **1. Dashboard em Tempo Real**
```typescript
// Métricas atualizadas automaticamente
{
  totalDevices: 125,
  onlineDevices: 98,
  offlineDevices: 27,
  maintenanceDevices: 8,
  errorDevices: 3,
  systemStatus: "HEALTHY",
  uptimePercentage: 78.4,
  lastUpdate: "2024-01-15T14:30:00"
}
```

### **2. Criação de Dispositivo**
```typescript
// Formulário validado para novo dispositivo
const newDevice = {
  deviceName: "Sensor Temperatura - Sala A1",
  deviceIdentifier: "TEMP-001-A1", 
  deviceType: "SENSOR",
  description: "Sensor de temperatura para monitoramento",
  location: "Prédio A - Andar 2 - Sala A1",
  latitude: -23.5505,
  longitude: -46.6333,
  isActive: true,
  status: "ACTIVE"
};
```

### **3. Filtros Avançados**
```typescript
// Sistema de filtros dinâmicos
const filters = {
  search: "temperatura",        // Busca por texto
  type: "SENSOR",              // Filtro por tipo
  status: "ACTIVE",            // Filtro por status
  connectivity: "ONLINE"       // Filtro por conectividade
};
```

## 🎯 Funcionalidades Avançadas

### **🔄 Auto-refresh Inteligente**
- **Atualizações automáticas** a cada 30 segundos
- **Pausar/retomar** refresh baseado na visibilidade da aba
- **Indicadores visuais** de sincronização
- **Fallback graceful** em caso de perda de conexão

### **📊 Sistema de Alertas**
- **Detecção automática** de dispositivos com problemas
- **Classificação por severidade** (Info, Warning, Error, Critical)
- **Notificações não-intrusivas** com snackbars
- **Histórico de alertas** para auditoria

### **🎨 Temas e Personalização**
- **Design system** consistente e extensível
- **Cores semânticas** para estados de dispositivos
- **Tipografia** otimizada para legibilidade
- **Espaçamento** harmônico baseado em grid de 8px

## 🚀 Próximos Passos e Melhorias

### **🎯 Funcionalidades Futuras**
- 🔐 **Autenticação** com JWT e guards de rota
- 🌍 **Internacionalização** completa (PT/EN/ES)
- 📱 **PWA** com service workers e cache offline
- 🗺️ **Mapas interativos** para visualização geográfica de dispositivos
- 📧 **Notificações push** para alertas críticos
- 📊 **Relatórios exportáveis** em PDF/Excel
- 🎨 **Temas personalizáveis** (claro/escuro)

### **⚡ Otimizações Técnicas**
- 🔄 **WebSocket** para atualizações em tempo real
- 💾 **State Management** com NgRx para aplicações complexas
- 🧪 **Testes automatizados** (Unit + E2E) com Jest e Cypress
- 📊 **Analytics** de uso com Google Analytics
- 🔍 **Logs estruturados** para debugging avançado
- 🏗️ **Micro-frontends** para escalabilidade

## 👨‍💻 Autor

**David Barbosa Santos**
- 🎯 **Objetivo**: Vaga Desenvolvedor Backend Jr - Meta Telecom
- 💼 **LinkedIn**: [David Bissaco da Silva](https://linkedin.com/in/davidbs09)
- 🐙 **GitHub**: [davidbs09](https://github.com/davidbs09)
- 📧 **Email**: davidbissacodasilva@gmail.com

## 📄 Licença

Este projeto foi desenvolvido como parte de um desafio técnico e está disponível para fins educacionais e demonstração de habilidades técnicas.

---

## 🎬 Demonstração em Vídeo

*Em produção - será enviado junto com este projeto demonstrando:*
- ✅ Interface completa funcionando
- 📊 Dashboard em tempo real com auto-refresh
- 🔧 CRUD completo de dispositivos
- 📱 Responsividade em diferentes dispositivos
- 🎨 Experiência do usuário fluida
- 💭 Explicação da arquitetura frontend e integração com backend

---

## 🔗 Integração com Backend

Este frontend foi desenvolvido para consumir a API do **[IoT Dashboard Backend](https://github.com/davidbs09/iot-dashboard-backend)**.

**Configuração da API:**
```typescript
// environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};
```

**Certifique-se de que o backend esteja rodando em `http://localhost:8080`**

---

**⭐ Desenvolvido com paixão para a Meta Telecom | Interface moderna para o futuro da conectividade IoT ⭐**
