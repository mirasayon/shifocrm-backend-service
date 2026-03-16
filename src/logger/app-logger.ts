import { ConsoleLogger } from "@nestjs/common";

/**
 * Nest's default timestamp uses the host locale and may show AM/PM.
 * Force a 24-hour timestamp to keep logs consistent across environments.
 */
export class AppLogger extends ConsoleLogger {
    protected getTimestamp(): string {
        return new Intl.DateTimeFormat(undefined, {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
        }).format(new Date());
    }
}
