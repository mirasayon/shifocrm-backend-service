import { ConsoleLogger } from "@nestjs/common";

/**
 * Nest's default timestamp uses the host locale and may show AM/PM or MM/DD.
 * Force a stable 24-hour timestamp to keep logs consistent across environments.
 */
export class AppLogger extends ConsoleLogger {
    protected getTimestamp(): string {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        const hour = String(now.getHours()).padStart(2, "0");
        const minute = String(now.getMinutes()).padStart(2, "0");
        const second = String(now.getSeconds()).padStart(2, "0");
        const millisecond = String(now.getMilliseconds()).padStart(3, "0");
        return `${day}D.${month}M.${year}Y | ${hour}:${minute}:${second}.${millisecond}`;
    }
}
