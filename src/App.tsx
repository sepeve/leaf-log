import { Button, Paper, Typography } from '@mui/material';
import { SettingsProvider } from './core/context/SettingsContext';
import { Layout } from './layout/AppLayout';

export default function App() {
  return (

    <SettingsProvider>
        <Layout>
            <main className="min-h-screen p-6 md:p-12">
            <Paper className="mx-auto max-w-lg rounded-2xl p-6">
                <Typography variant="h5">
                React + MUI + Tailwind
                </Typography>

                <p className="mt-3 mb-6 text-slate-600">
                Componentes MUI con distribución y espacios de Tailwind.
                </p>

                <Button
                variant="contained"
                color="primary"
                className="w-full normal-case"
                >
                Empezar
                </Button>
            </Paper>
            </main>
        </Layout>
    </SettingsProvider>

  );
}