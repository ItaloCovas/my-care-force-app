import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const formattedDate = format(date, "dd/MM/yyyy HH:mm:ss", { locale: ptBR });
  const splittedDate = formattedDate.split(" ");
  const stringDate = `${splittedDate[0]} às ${splittedDate[1]}`;

  return stringDate;
}
