import 'package:flutter/material.dart';

import '../../tabs/tabs.dart';

TextStyle textStyle(double fontSize, Color color) => TextStyle(
      fontFamily: 'Montserrat',
      fontSize: fontSize,
      color: color,
      fontWeight: FontWeight.bold,
    );

//The buttons in the top Nav Bar
class UnderlinedButton extends StatefulWidget {
  const UnderlinedButton({
    Key? key,
    required this.context,
    required this.btnName,
    required this.btnNumber,
    required this.tabNumber,
  }) : super(key: key);

  @override
  _UnderlinedButtonState createState() => _UnderlinedButtonState();

  final BuildContext context;
  final String btnName, btnNumber;
  final int tabNumber;
}

class _UnderlinedButtonState extends State<UnderlinedButton> with SingleTickerProviderStateMixin {
  bool _isHover = false;
  late AnimationController _animationController;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _animationController = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 300),
    );
    _animation = Tween<double>(begin: 0.0, end: 1.0).animate(
      CurvedAnimation(parent: _animationController, curve: Curves.easeInOut),
    );
  }

  @override
  void dispose() {
    _animationController.dispose();
    super.dispose();
  }

  void _onHover(bool isHovering) {
    setState(() {
      _isHover = isHovering;
      if (isHovering) {
        _animationController.forward();
      } else {
        _animationController.reverse();
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => _onHover(true),
      onExit: (_) => _onHover(false),
      child: InkWell(
        borderRadius: BorderRadius.circular(5.0),
        hoverColor: Colors.transparent,
        onTap: () => scroll.scrollTo(
          index: widget.tabNumber,
          duration: const Duration(milliseconds: 1000),
        ),
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 16),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(
                    widget.btnNumber,
                    style: textStyle(11, Theme.of(context).primaryColorLight),
                  ),
                  Text(
                    widget.btnName,
                    style: textStyle(15, Theme.of(context).primaryColor),
                  ),
                ],
              ),
              const SizedBox(height: 4),
              AnimatedBuilder(
                animation: _animation,
                builder: (context, child) {
                  return Container(
                    height: 2,
                    width: _animation.value * _getTextWidth(widget.btnName, 15, context),
                    decoration: BoxDecoration(
                      color: _isHover ? Theme.of(context).primaryColor : Colors.transparent,
                      borderRadius: BorderRadius.circular(1),
                    ),
                  );
                },
              ),
            ],
          ),
        ),
      ),
    );
  }

  double _getTextWidth(String text, double fontSize, BuildContext context) {
    final textPainter = TextPainter(
      text: TextSpan(
        text: text,
        style: textStyle(fontSize, Theme.of(context).primaryColor),
      ),
      maxLines: 1,
      textDirection: TextDirection.ltr,
    )..layout();
    return textPainter.size.width;
  }
}
